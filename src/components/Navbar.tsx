"use client";
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';


function Navbar() {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
							<li className='font-semibold '><Link href="/">Home</Link></li>
							<li><Link href="/portfolio">Portfolio</Link></li>
							<li><Link href="/blog">Blog</Link></li>
							<li><Link href="/about">About</Link></li>
							<li><Link href="/contact">Contact</Link></li>
							<li><Link href="/dashboard">DashBoard</Link></li>
							<li><Link href="/login">Login</Link></li>
						</ul>
					</div>
					<a className="text-xl normal-case btn btn-ghost">daisyUI</a>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="px-1 menu menu-horizontal">
						<li className='hover:font-semibold hover:text-green-500'><Link href="/">Home</Link></li>
						<li className='hover:font-semibold hover:text-green-500'><Link href="/portfolio">Portfolio</Link></li>
						<li className='hover:font-semibold hover:text-green-500'><Link href="/blog">Blog</Link></li>
						<li className='hover:font-semibold hover:text-green-500'><Link href="/about">About</Link></li>
						<li className='hover:font-semibold hover:text-green-500'><Link href="/contact">Contact</Link></li>
						<li className='hover:font-semibold hover:text-green-500'><Link href="/dashboard">DashBoard</Link></li>
						<li className='font-bold text-white bg-green-500 rounded group'><Link href="/login">
							Login
						</Link></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar