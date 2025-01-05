import ReactGA from 'react-ga4';
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const trackingId = 'G-9NMVVP83JB';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

	const { pathname } = new URL(request.url);

	if (pathname === '/waitlist') {
		const token = request.cookies.get('waitlist-token');
		if (token) {
			// return NextResponse.redirect(new URL('/onboarding/payment', request.url));
			const url = new URL('/onboarding/payment', request.url);
			url.search = new URL(request.url).search;
			return NextResponse.redirect(url);
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
			return NextResponse.next();
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