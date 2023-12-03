const { withAxiom } = require('next-axiom');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	experimental: {
		serverActions: true,
		serverComponentsExternalPackages: [
			'@react-email/components',
			'@react-email/render',
			'@react-email/tailwind',
			'responsive-react-email',
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	}
};

module.exports = withAxiom(nextConfig);
