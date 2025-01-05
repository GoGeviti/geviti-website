import ReactGA from 'react-ga4';
import jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const trackingId = 'G-9NMVVP83JB';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

	const { pathname } = new URL(request.url);

	if (pathname === '/waitlist') {
		const token = request.cookies.get('waitlist-token');
		if (token) {
			try {
				// Verify the JWT token
				const decoded = jwt.verify(token.value, process.env.JWT_SECRET as string);
				
				if (!decoded || typeof decoded !== 'object' || !decoded.authorized) {
					return NextResponse.next();
				}
				
				// Token is valid, redirect to payment
				const url = new URL('/onboarding/payment', request.url);
				url.search = new URL(request.url).search;
				return NextResponse.redirect(url);
			} catch (error) {
				// Token is invalid or expired, continue to waitlist
				return NextResponse.next();
			}
		} else {
			return NextResponse.next();
		}
	}

	if (pathname === '/onboarding/payment') {
		const token = request.cookies.get('waitlist-token');
		if (!token) {
			const url = new URL('/waitlist', request.url);
			// Preserve all query parameters from the original URL
			url.search = new URL(request.url).search;
			return NextResponse.redirect(url);
		} else {
			try {
				// Verify the JWT token using the same secret
				const decoded = jwt.verify(token.value, process.env.JWT_SECRET as string);
				
				if (!decoded || typeof decoded !== 'object' || !decoded.authorized) {
					return NextResponse.redirect(new URL('/waitlist', request.url));
				}
				
				// Token is valid, continue
				return NextResponse.next();
			} catch (error) {
				// Token is invalid or expired
				return NextResponse.redirect(new URL('/waitlist', request.url));
			}
		}
	}
    
	// Redirect /pickleballkingdom to /
	if (pathname === '/pickleballkingdom') {
		ReactGA.initialize(trackingId);
		ReactGA.send({ hitType: 'pageview', page: '/pickleballkingdom', title: 'Pickleball Kingdom' });
		return NextResponse.redirect(new URL('/', request.url));
	}

	const userAgent = request.headers.get('user-agent')?.toLowerCase();

	if (userAgent) {
		if (userAgent.includes('iphone')) {
			return NextResponse.redirect(process.env.NEXT_PUBLIC_APPLE_STORE_URL);
		} else if (userAgent.includes('android')) {
			return NextResponse.redirect(process.env.NEXT_PUBLIC_PLAY_STORE_URL);
		} else {
			return NextResponse.redirect(new URL('/', request.url))
		}
	}

	// Continue with the request if no user agent match
	return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/mobile', '/pickleballkingdom', '/onboarding/payment', '/waitlist'],
}