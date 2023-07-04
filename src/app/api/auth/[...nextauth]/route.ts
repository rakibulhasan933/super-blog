import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
	],
})

export { handler as GET, handler as POST };