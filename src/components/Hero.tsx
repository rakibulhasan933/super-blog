import Image from 'next/image'
import React from 'react'

function Hero() {
	return (
		<div>
			<div className="min-h-screen hero bg-base-200">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<Image src="/hero.png" height={250} width={280} priority className="object-contain w-full rounded-lg shadow-2xl" alt='hero' />
					<div className='px-4'>
						<h1 className="text-5xl font-bold bg-gradient-to-r from-blue-200">Better Design For your digital Products!</h1>
						<p className="py-6">Turning your idea Reality Web bring together the teams the global tech industry </p>
						<button className="btn btn-primary">See Our Works</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero