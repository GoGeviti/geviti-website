/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	// swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/men/:path*',
				destination: '/solution/men/:path*',
			},
			{
				source: '/women/:path*',
				destination: '/solution/women/:path*',
			}
		];
	},
	async redirects() {
		return [
			{
				source: '/solution/:path*',
				destination: '/:path*',
				permanent: true, // Redirect permanen for SEO
			},
		];
	},
};

module.exports = nextConfig;
