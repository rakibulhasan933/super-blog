import Image from 'next/image'
import React from 'react'
import styles from '@/app/contact/page.module.css'

function Contact() {
	return (
		<div className='py-10'>
			<div className="my-10 ">
				<h1 className="py-4 text-5xl font-bold text-center"> Let,s keep in Touch</h1>
			</div>
			<div className="flex flex-row gap-5">
				<div className="p-12 basis-1/2">
					<Image src="/contact.png" alt='contact' width={400} height={200} className={styles.image} />
				</div>
				<div className="basis-1/2">
					<div className="flex flex-col gap-5 ">
						<input type="email" name="email" className='w-4/5 px-4 py-2 border-2 border-teal-400 rounded-md ' placeholder='example@gmail.com' />
						<input type="text" placeholder='Name' className='w-4/5 px-4 py-2 border-2 border-teal-400 rounded-md ' />
						<textarea typeof='string' cols={50} rows={10} className='w-4/5 px-4 py-2 border-2 border-teal-400 rounded-md ' placeholder='Enter your message'></textarea>
						<button className="flex justify-start px-6 py-2 font-bold border-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-w-fit hover:bg-green-500 hover:text-white">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact