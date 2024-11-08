import ReactGA from 'react-ga4';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const trackingId = 'G-9NMVVP83JB';

export function middleware(request: NextRequest) {
	const { pathname, hostname } = new URL(request.url);

	// Redirect gogeviti.com to www.gogeviti.com, but avoid redirecting if already on www.gogeviti.com
	if (hostname === 'gogeviti.com') {
		const url = new URL(request.url);
		url.hostname = 'www.gogeviti.com';
		return NextResponse.redirect(url);
	}

	// Redirect /pickleballkingdom to /
	if (pathname === '/pickleballkingdom') {
		ReactGA.initialize(trackingId);
		ReactGA.send({ hitType: 'pageview', page: '/pickleballkingdom', title: 'Pickleball Kingdom' });
		return NextResponse.redirect(new URL('/', request.url));
	}

	// Redirect to App Store or Play Store if the path is /mobile
	if (pathname === '/mobile') {
		const userAgent = request.headers.get('user-agent')?.toLowerCase();
		if (userAgent) {
			if (userAgent.includes('iphone')) {
				return NextResponse.redirect(process.env.NEXT_PUBLIC_APPLE_STORE_URL);
			} else if (userAgent.includes('android')) {
				return NextResponse.redirect(process.env.NEXT_PUBLIC_PLAY_STORE_URL);
			} else {
				return NextResponse.redirect(new URL('/', request.url));
			}
		}
	}

	// Continue with the request for all other cases
	return NextResponse.next();
}

// Match paths for middleware to apply to specific paths
export const config = {
	matcher: ['/:path*'],
};
