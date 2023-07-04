"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
	return (
		<div>
			<div className="text-center">
				<button onClick={() => signIn("google")} className="">Login with Google</button>
			</div>
		</div>
	)
}

export default Login