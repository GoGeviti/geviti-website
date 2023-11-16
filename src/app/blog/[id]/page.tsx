import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { generateMeta } from '@/lib/generateMeta';
import { Post } from '@/payload/payload-types';
import { getPostById } from '@/services/products';

import PageClient from './page.client';

export const dynamic = 'force-dynamic';

export default async function Page({ params: { id = '' } }) {

	let post: Post | null = null;

	try {
		post = await getPostById(id);
	} catch (error) {
		// when deploying this template on Payload Cloud, this page needs to build before the APIs are live
		// so swallow the error here and simply render the page with fallback data where necessary
		// in production you may want to redirect to a 404  page or at least log the error somewhere
		// console.error(error)
	}

	if (!post) {
		return notFound();
	}

	return <PageClient post={ post } />;
}

export async function generateMetadata({ params: { id = '' } }): Promise<Metadata> {

	let post: Post | null = null;

	try {
		post = await getPostById(id);
	} catch (error) {
		// don't throw an error if the fetch fails
		// this is so that we can render static fallback pages for the demo
		// when deploying this template on Payload Cloud, this page needs to build before the APIs are live
		// in production you may want to redirect to a 404  page or at least log the error somewhere
	}

	return generateMeta({ doc: post as Post });
}
