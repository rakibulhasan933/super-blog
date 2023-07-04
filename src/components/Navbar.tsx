"use client";
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle';
import { signIn, useSession } from 'next-auth/react';


function Navbar() {
	const { data: session, status } = useSession()
	console.log(session)
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<DarkModeToggle />
							</li>
							<li className='hover:font-bold hover:text-blue-500'><Link href="/">Home</Link></li>
							<li className='hover:font-bold hover:text-blue-500'><Link href="/portfolio">Portfolio</Link></li>
							<li className='hover:font-bold hover:text-blue-500'><Link href="/blog">Blog</Link></li>
							<li className='hover:font-bold hover:text-blue-500'><Link href="/about">About</Link></li>
							<li className='hover:font-bold hover:text-blue-500'><Link href="/contact">Contact</Link></li>
							<li className='hover:font-bold hover:text-blue-500'><Link href="/dashboard">DashBoard</Link></li>
							<li className='font-bold text-white rounded bg-gradient-to-r from-green-400 to-blue-500 group'><Link href="/login">
								Login
							</Link></li>
						</ul>
					</div>
					<a className="text-xl normal-case btn btn-ghost">daisyUI</a>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="items-center px-1 menu menu-horizontal">
						<li>
							<DarkModeToggle />
						</li>
						<li className='hover:font-bold hover:text-blue-500'><Link href="/">Home</Link></li>
						<li className='hover:font-bold hover:text-blue-500'><Link href="/portfolio">Portfolio</Link></li>
						<li className='hover:font-bold hover:text-blue-500'><Link href="/blog">Blog</Link></li>
						<li className='hover:font-bold hover:text-blue-500'><Link href="/about">About</Link></li>
						<li className='hover:font-bold hover:text-blue-500'><Link href="/contact">Contact</Link></li>
						<li className='hover:font-bold hover:text-blue-500'><Link href="/dashboard">DashBoard</Link></li>
						<li className='font-bold text-white rounded bg-gradient-to-r from-green-400 to-blue-500 group'><button onClick={() => signIn("google")}>
							Login
						</button></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar