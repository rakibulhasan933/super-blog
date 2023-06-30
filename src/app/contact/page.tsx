import Image from 'next/image'
import React from 'react'

function Contact() {
	return (
		<div className='py-10'>
			<h1 className="py-4 text-6xl font-bold text-center"> Let,s keep in Touch</h1>
			<div className="flex flex-row ">
				<div className="basis-1/2">
					<Image src="/contact.png" alt='contact' width={400} height={200} className='object-contain ' />
				</div>
				<div className="basis-1/2">
					login Form
				</div>
			</div>
		</div>
	)
}

export default Contact