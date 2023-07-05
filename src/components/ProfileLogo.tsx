"use client"
import React from 'react'

function ProfileLogo() {
	return (
		<div>
			<div className="dropdown dropdown-end">
				<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
					<div className="w-10 rounded-full">
						<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='profile' />
					</div>
				</label>
				<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
					<li>
						<a className="justify-between">

							<span className="badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a>Logout</a></li>
				</ul>
			</div>
		</div>
	)
}

export default ProfileLogo