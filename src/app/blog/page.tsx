import Image from 'next/image'
import React from 'react'

function Blog() {
	return (
		<div className='m-10'>
			<div className="grid grid-cols-3 gap-4">
				<div className="flex flex-col p-3 border-2 rounded-md ">
					<div className="flex justify-center">
						<Image src="/hero.png" alt='photo' width={200} priority height={150} />
					</div>
					<p className="my-2 text-base font-normal">Rakibul Hasan</p>
					<h2 className="my-3 text-xl font-semibold">How to Get a Github Student Developer Pack</h2>
					<p className="mb-2 text-xs font-normal">May 24,2023</p>
				</div>
			</div>
		</div>
	)
}

export default Blog