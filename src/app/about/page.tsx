import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
	return (
		<div>
			<div className="py-10">
				<div className="flex flex-col gap-10">
					<div className=" w-full h-[300px] relative">
						<Image src="/about.jpeg" className='object-cover w-full rounded' fill alt='desktop' />
						<div className=" absolute left-4 bottom-4 flex flex-col gap-[10px] text-white rounded-md bg-green-500 p-4">
							<h2 className="text-2xl font-bold">Digital Storytellers</h2>
							<h3 className="text-xl font-medium">Handcrafting award winning digital experiences</h3>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="px-4 basis-1/2">
							<h2 className="my-5 text-2xl font-bold ">Who are You?</h2>
							<p className="font-serif text-base">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum libero, explicabo autem in reiciendis nam aliquid. Nobis ipsam eaque quia esse ea asperiores non in veritatis! Vero dolore porro magni qui laudantium quos blanditiis, cupiditate asperiores ab voluptatibus eius perspiciatis repudiandae neque accusantium molestias assumenda dolorem adipisci reiciendis ducimus officiis, earum iste? Ad laborum alias tempora est doloribus nostrum.
							</p>
						</div>
						<div className="px-4 basis-1/2">
							<h2 className="my-5 text-2xl font-bold ">What You Do?</h2>
							<p className="my-5 font-serif text-base">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum libero, explicabo autem in reiciendis nam aliquid. Nobis ipsam eaque quia esse ea asperiores non in veritatis! Vero dolore porro magni qui laudantium quos blanditiis, cupiditate asperiores ab voluptatibus eius perspiciatis repudiandae neque accusantium molestias assumenda dolorem adipisci reiciendis ducimus officiis, earum iste? Ad laborum alias tempora est doloribus nostrum.
							</p>
							<Link href="/contact" className="px-4 py-2 font-bold text-white rounded bg-gradient-to-r from-green-400 to-blue-500 group">Contact</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About