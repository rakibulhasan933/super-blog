import Image from 'next/image'
import React from 'react'

function About() {
	return (
		<div>
			<div className="">
				<div className="flex flex-col gap-10">
					<div className=" w-full h-[300px] relative">
						<Image src="/about.jpeg" className='object-cover w-full rounded' fill alt='desktop' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About