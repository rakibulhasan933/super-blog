import Image from 'next/image'
import React from 'react'
import styles from '@/app/contact/page.module.css'


function Contact() {
	return (
		<div className='my-10'>
			<div className="my-10 ">
				<h1 className="py-4 text-5xl font-bold text-center"> Let,s keep in Touch</h1>
			</div>
			<div className="flex flex-col items-center gap-4 md:flex-row">
				<div className="flex items-center justify-center px-6 basis-1/2">
					<div className="w-full p-6 ">
						<Image src="/contact.png" alt='contact' width={400} height={200} className={styles.image} />
					</div>
				</div>
				<div className="flex items-center justify-center px-6 basis-1/2">
					<div className="flex flex-col w-full gap-y-4">
						<input type="email" name="email" className='w-full px-4 py-2 border-2 border-teal-400 rounded-md bg-slate-50' placeholder='example@gmail.com' />
						<input type="text" placeholder='Name' className='px-4 py-2 border-2 border-teal-400 rounded-md bg-slate-50' />
						<textarea typeof='string' cols={20} rows={5} className='px-4 py-2 border-2 border-teal-400 rounded-md bg-slate-50' placeholder='Enter your message'></textarea>
						<button className="flex justify-start px-6 py-2 font-bold text-white transition duration-300 ease-in-out delay-150 bg-blue-500 border-2 border-teal-700 rounded-md max-w-fit bg-gradient-to-r from-green-400 to-blue-500 hover:translate-y-1 hover:scale-110">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact

