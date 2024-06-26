import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
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
	matcher: '/mobile',
}