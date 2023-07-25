"use client";
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import { usePathname } from 'next/navigation'

function Navbar() {
	const { data } = useSession();

	const pathname = usePathname()
	console.log(pathname);

	const userEmail = data?.user?.email;

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
							{userEmail ? <li>
								{userEmail &&
									<div className="my-2 dropdown dropdown-end">
										<label tabIndex={1} className="btn btn-ghost btn-circle avatar">
											<div className="w-10 rounded-full">
												<Image src={data.user?.image as string} alt='man' width={50} height={50} />
											</div>
										</label>
										<ul tabIndex={1} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
											<li>
												<a className="justify-between">
													{data.user?.name}
													<span className="badge">New</span>
												</a>
											</li>
											<li><Link href={'/dashboard'}>Dashboard</Link></li>
											<li><button onClick={() => signOut()} >Logout</button></li>
										</ul>
									</div>
								}
							</li> :
								<li className='font-bold text-white rounded bg-gradient-to-r from-green-400 to-blue-500 group'><button onClick={() => signIn()}>
									Login
								</button></li>
							}
						</ul>
					</div>
					<Link href="/" className="text-xl normal-case btn btn-ghost">The Thoughtful Pen</Link>
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
						{userEmail && <li className='hover:font-bold hover:text-blue-500'><Link href="/dashboard">DashBoard</Link></li>}
						{userEmail ? <li>
							{userEmail &&
								<div className="dropdown dropdown-end">
									<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
										<div className="w-10 rounded-full">
											<Image src={data.user?.image as string} alt='man' width={50} height={50} />
										</div>
									</label>
									<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
										<li>
											<a className="justify-between">
												{data.user?.name}
												<span className="badge">New</span>
											</a>
										</li>
										<li><Link href={'/dashboard'}>Dashboard</Link></li>
										<li><button onClick={() => signOut()} >Logout</button></li>
									</ul>
								</div>
							}
						</li> :
							<li className='font-bold text-white rounded bg-gradient-to-r from-green-400 to-blue-500 group'><button onClick={() => signIn()}>
								Login
							</button></li>
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar;