import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from "next-auth";


export const options: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60

	}
}