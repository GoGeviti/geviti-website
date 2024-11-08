import ReactGA from 'react-ga4';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const trackingId = 'G-9NMVVP83JB';

export function middleware(request: NextRequest) {

	 const hostname = request.headers.get('host') || ''
	const { pathname } = new URL(request.url);

	// Debug logging (check Railway logs)
	console.log('Middleware running for:', {
		hostname,
		pathname,
		url: request.url
	})

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
	matcher: [
		// Add the catch-all route for www redirect
		'/((?!api|_next|_static|images|videos|meta|lottie|files|_vercel|[\\w-]+\\.\\w+).*)',
		// Keep your existing routes
		'/mobile',
		'/pickleballkingdom'
	]
};
