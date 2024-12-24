'use client'
/* eslint-disable no-unused-vars */
import type { PropsWithChildren } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'

interface ImageUrls {
  priority: string[]
  normal: string[]
}

type CustomLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & PropsWithChildren & React.RefAttributes<HTMLAnchorElement> & {
  href: string
  maxImages?: number
  timeout?: number
	externalLink?: boolean;
  disablePrefetch?: boolean;
  prioritySelectors?: string[]
  onPrefetchStart?: () => void
  onPrefetchComplete?: () => void
  onPrefetchError?: (error: Error) => void
}

const getImageUrls = (
	html: string,
	prioritySelectors: string[]
): ImageUrls => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(html, 'text/html')
  
	const priorityUrls = new Set<string>()
	const normalUrls = new Set<string>()

	// Priority images first
	prioritySelectors.forEach(selector => {
		doc.querySelectorAll(selector).forEach(img => {
			const imgElement = img as HTMLImageElement
			if (imgElement.src) priorityUrls.add(imgElement.src)
			if (imgElement.dataset.src) priorityUrls.add(imgElement.dataset.src)
		})
	})

	// Then regular images
	doc.querySelectorAll('img').forEach(img => {
		const imgElement = img as HTMLImageElement
		if (prioritySelectors.some(selector => imgElement.matches(selector))) {
			return // Skip priority images
		}
		if (imgElement.src) normalUrls.add(imgElement.src)
		if (imgElement.dataset.src) normalUrls.add(imgElement.dataset.src)
	})

	return {
		priority: Array.from(priorityUrls),
		normal: Array.from(normalUrls)
	}
}

const CustomLink = ({
	href,
	children,
	maxImages = 30,
	timeout = 3000,
	prioritySelectors = ['img.hero', 'img.critical'],
	disablePrefetch = false,
	onPrefetchStart,
	onPrefetchComplete,
	onPrefetchError,
	externalLink,
	...props
}: CustomLinkProps) => {
	const [hasPreloaded, setHasPreloaded] = useState<boolean>(false)
	const abortController = useRef<AbortController | null>(null)
	const htmlCache = useRef<string | null>(null)

	const prefetchImage = useCallback((url: string): Promise<void> => {
		return new Promise((resolve, reject) => {
			const img = new Image()
			img.onload = () => resolve()
			img.onerror = e => reject(e)
			img.src = url
		})
	}, [])

	const prefetchImages = useCallback(async(html: string): Promise<void> => {
		try {
			const { priority, normal } = getImageUrls(html, prioritySelectors)
      
			// Prefetch priority images first
			await Promise.all(priority.map(prefetchImage))

			// Then prefetch remaining images up to maxImages
			const remainingSlots = maxImages - priority.length
			if (remainingSlots > 0) {
				const normalToLoad = normal.slice(0, remainingSlots)
				await Promise.all(normalToLoad.map(prefetchImage))
			}

			setHasPreloaded(true)
			onPrefetchComplete?.()
		} catch (error) {
			const err = error instanceof Error ? error : new Error('Unknown error')
			onPrefetchError?.(err)
		}
	}, [maxImages, prioritySelectors, prefetchImage, onPrefetchComplete, onPrefetchError])

	const handlePrefetch = useCallback(async() => {
		if (hasPreloaded || htmlCache.current || disablePrefetch) return

		try {
			onPrefetchStart?.()

			// Cancel previous prefetch if exists
			if (abortController.current) {
				abortController.current.abort()
			}
      
			abortController.current = new AbortController()

			// Fetch with timeout
			const response = await Promise.race([
				fetch(href, {
					signal: abortController.current.signal,
					cache: 'no-store'
				}),
				new Promise<never>((_, reject) =>
					setTimeout(() => reject(new Error('Prefetch timeout')), timeout)
				)
			])

			const html = await response.text()
			htmlCache.current = html

			// Start prefetching images
			await prefetchImages(html)
		} catch (error) {
			if (error instanceof Error) {
				if (error.name === 'AbortError') return
				onPrefetchError?.(error)
			}
		}
	}, [
		hasPreloaded,
		href,
		timeout,
		prefetchImages,
		onPrefetchStart,
		onPrefetchError,
		disablePrefetch
	])

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (abortController.current) {
				abortController.current.abort()
			}
			htmlCache.current = null
		}
	}, [])

	return (
		<Link
			href={ href }
			onMouseEnter={ handlePrefetch }
			onTouchStart={ handlePrefetch }
			{ ...props }
			prefetch={ true }
			{ ...externalLink
				? {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
				: {} }
		>
			{ children }
		</Link>
	)
}

// Optional: Export types
export type { CustomLinkProps, ImageUrls }
export default CustomLink