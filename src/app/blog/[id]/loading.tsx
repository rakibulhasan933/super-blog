import React from 'react'

function loading() {
	return (
		<div className='h-screen'>
			<div className="flex items-center justify-center">
				<div className="my-52">
					<span className="w-20 bg-pink-800 loading loading-infinity"></span>
				</div>
			</div>
		</div>
	)
}

export default loading