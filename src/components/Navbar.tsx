import Link from 'next/link'
import React from 'react'

const links = [
	{
		id: 0,
		title: "Home",
		url: "/"
	},
	{
		id: 1,
		title: "Portfolio",
		url: "/portfolio"
	},
	{
		id: 2,
		title: "Blog",
		url: "/blog"
	},
	{
		id: 3,
		title: "About",
		url: "/about"
	},
	{
		id: 4,
		title: "Contact",
		url: "/contact"
	},
	{
		id: 5,
		title: "DashBoard",
		url: "/dashboard"
	},

]

function Navbar() {
	return (
		<div>
			<div className='flex flex-row items-center justify-between'>
				<h2 className="text-2xl font-bold">The Thoughtful Pen</h2>
				<div className="">
					<div className="flex flex-row items-center gap-5">
						<div className="flex gap-5">
							{
								links.map((link) => <Link key={link.id} href={link.url} className='text-base font-medium hover:text-green-600' >{link.title}</Link>)
							}
						</div>
						<div className="px-4 py-2 text-lg font-medium text-white bg-green-500 rounded hover:text-xl">
							<button>Login</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Navbar