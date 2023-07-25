"use client";
import { DashBoardProps } from '@/type';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const dashboard: DashBoardProps[] = [
	{
		title: "Create Blog",
		href: "/dashboard/add_blog",
		id: 1
	},
	{
		title: "Blogs",
		href: "/dashboard/blogs_list",
		id: 2
	}
];


function DashboardNavbar() {
	const pathname = usePathname();
	return (
		<ul className="flex flex-col gap-4">
			{
				dashboard.map((nav) => <li className='py-2 font-semibold' key={nav.id}><Link className={pathname === nav.href ? "text-blue-800" : ""} href={nav.href}>{nav.title}</Link> </li>)
			}
		</ul>
	)
}

export default DashboardNavbar