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
				<div className="flex ">
					<h2 className="">The Thoughtful Pen</h2>
				</div>
				<div className="">
					<div className="flex flex-row items-center gap-5">
						<div className="flex gap-5">
							{
								links.map((link) => <Link key={link.id} href={link.url} >{link.title}</Link>)
							}
						</div>
						<div className="">
							<button>Login</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Navbar