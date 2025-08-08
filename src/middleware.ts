import ReactGA from 'react-ga4';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const trackingId = 'G-9NMVVP83JB';

export async function middleware(request: NextRequest) {
	const { pathname } = new URL(request.url);

	// console.log('Middleware - pathname:', pathname); // Debug log

	// Redirect /referrals to REFERRALS_REDIRECT_URL with all query parameters
	if (pathname === '/referrals') {
		const referralRedirectUrl =
      process.env.REFERRALS_REDIRECT_URL || '/pricing-welcome';
		const url = new URL(referralRedirectUrl, request.url);

		// Copy all query parameters from the original request
		const searchParams = new URL(request.url).searchParams;
		searchParams.forEach((value, key) => {
			url.searchParams.set(key, value);
		});

		return NextResponse.redirect(url);
	}

	// if (pathname === '/landing' || pathname === '/pricing-welcome' || pathname === '/schedule-call') {
	// 	// Create token directly in middleware
	// 	const token = await new jose.SignJWT({ authorized: true })
	// 		.setProtectedHeader({ alg: 'HS256' })
	// 		.setExpirationTime('24h')
	// 		.sign(new TextEncoder().encode(process.env.JWT_SECRET));

	// 	const response = NextResponse.next();
	// 	response.cookies.set('waitlist-token', token, {
	// 		path: '/',
	// 		maxAge: 60 * 60 * 24, // 24 hours
	// 		httpOnly: true,
	// 		secure: process.env.NODE_ENV === 'production',
	// 	});

	// 	return response;
	// }

	if (pathname === '/onboarding/payment') {
		const url = new URL(request.url);
		const geviti_token = url.searchParams.get('geviti_token');

		// Handle geviti_token parameter by setting it as a cookie
		if (geviti_token) {
			const response = NextResponse.redirect(
				new URL(
					pathname +
            (url.search
            	.replace(/[?&]geviti_token=[^&]*/, '')
            	.replace(/^&/, '?') || ''),
					request.url
				)
			);

			const threeMonths = 90 * 24 * 60 * 60; // 3 months in seconds
			response.cookies.set('geviti_token', JSON.stringify(geviti_token), {
				path: '/',
				maxAge: threeMonths,
				secure: process.env.NODE_ENV === 'production',
			});

			return response;
		}

		// const token = request.cookies.get('waitlist-token');
		// if (!token?.value) {
		// 	const redirectUrl = new URL('/waitlist', request.url);
		// 	redirectUrl.search = new URL(request.url).search;
		// 	return NextResponse.redirect(redirectUrl);
		// }

		// 	if (token?.value) {
		// 		try {
		// 			const secret = new TextEncoder().encode(process.env.JWT_SECRET);
		// 			const { payload } = await jose.jwtVerify(token.value, secret);

		// 			if (payload?.authorized) {
		// 				// Token is valid, redirect to payment
		// 				const url = new URL('/onboarding/payment', request.url);
		// 				url.search = new URL(request.url).search;
		// 				return NextResponse.redirect(url);
		// 			}
		// 		} catch (error) {
		// 			// Invalid token - continue to waitlist page
		// 			return NextResponse.next();
		// 		}
		// 	}
		// 	return NextResponse.next();
		// }

		// if (pathname === '/onboarding/payment') {
		// 	const token = request.cookies.get('waitlist-token');
		// 	if (!token?.value) {
		// 		const url = new URL('/waitlist', request.url);
		// 		url.search = new URL(request.url).search;
		// 		return NextResponse.redirect(url);
		// 	}

		// 	try {
		// 		const secret = new TextEncoder().encode(process.env.JWT_SECRET);
		// 		const { payload } = await jose.jwtVerify(token.value, secret);

		// 		if (!payload?.authorized) {
		// 			const url = new URL('/waitlist', request.url);
		// 			url.search = new URL(request.url).search;
		// 			return NextResponse.redirect(url);
		// 		}

		// 		return NextResponse.next();
		// 	} catch (error) {
		// 		const url = new URL('/waitlist', request.url);
		// 		url.search = new URL(request.url).search;
		// 		return NextResponse.redirect(url);
		// 	}
	}

	// Redirect /pickleballkingdom to /
	if (pathname === '/pickleballkingdom') {
		ReactGA.initialize(trackingId);
		ReactGA.send({
			hitType: 'pageview',
			page: '/pickleballkingdom',
			title: 'Pickleball Kingdom',
		});
		return NextResponse.redirect(new URL('/', request.url));
	}

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

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/mobile',
		'/pickleballkingdom',
		'/onboarding/payment',
		// '/waitlist',
		// '/landing',
		// '/pricing-welcome',
		// '/schedule-call',
		'/referrals',
	],
};
