import Image from 'next/image'
import React from 'react'
import styles from "@/components/page.module.css";

function Hero() {
	return (
		<div>
			<div className="min-h-screen hero bg-base-200">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<Image src="/hero.png" height={250} width={480} priority className={styles.image} alt='hero' />
					<div className='px-4'>
						<h1 style={{
							background: '-webkit-linear-gradient(bottom, #194c33, #bbb)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}} className="text-5xl font-bold">Better Design For your digital Products!</h1>
						<p className="py-6">Turning your idea Reality Web bring together the teams the global tech industry </p>
						<button className="btn btn-primary">See Our Works</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero