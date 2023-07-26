"use client";
import { useSession } from 'next-auth/react';
import React from 'react'


async function Dashboard() {

	return (
		<div>
			<h2>Welcome to  Dashboard</h2>
			<h4>Updated marge</h4>
			<button>Refresh</button>
		</div>
	)
}

export default Dashboard