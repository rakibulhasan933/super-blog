/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/a/**',
			},
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
				port: '',
				pathname: '/fQsRxx5/**',
			},
		],
	},
}

module.exports = nextConfig
