"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { DashBoardProps } from '@/type';
import Link from 'next/link';



export default function NavbarItem() {
	const links: DashBoardProps[] = [
		{
			id: 1,
			href: "/",
			title: "Home"
		},
		{
			id: 2,
			href: "/about",
			title: "About"
		},
		{
			id: 3,
			href: "/blog",
			title: "Blogs"
		},
		{
			id: 4,
			href: "/contact",
			title: "Contacts"
		},
		{
			id: 5,
			href: "/dashboard",
			title: "Dashboard"
		}
	];
	const pathname = usePathname();
	return (
		<>
			{
				links.map((link) => <li key={link.id} className={pathname === link.href ? "text-blue-900" : ""}><Link className='font-semibold' href={link.href}>{link.title}</Link></li>)
			}
		</>
	)
}
