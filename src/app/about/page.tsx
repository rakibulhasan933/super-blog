import Image from 'next/image'
import React from 'react'

function About() {
	return (
		<div>
			<div className="">
				<div className="flex flex-col gap-10">
					<div className=" w-full h-[300px] relative">
						<Image src="/about.jpeg" className='object-cover w-full rounded' fill alt='desktop' />
						<div className=" absolute left-4 bottom-4 flex flex-col gap-[10px] text-white rounded-md bg-green-500 p-4">
							<h2 className="text-2xl font-bold">Digital Storytellers</h2>
							<h3 className="text-xl font-medium">Handcrafting award winning digital experiences</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About