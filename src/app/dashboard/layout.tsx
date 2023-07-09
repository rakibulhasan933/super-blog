import '../globals.css'
import { Manrope } from 'next/font/google'


const inter = Manrope({ subsets: ['latin'] })

export const metadata = {
	title: 'Dashboard',
	description: 'Generated by Rakibul',
}

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className={inter.className}>
			<div className="flex flex-row gap-4 mx-[140px] my-[40px]">
				<div className="flex w-3/12">
					<h3>Sidebar</h3>
				</div>
				<div className="flex w-9/12">
					{children}
				</div>
			</div>
		</section>
	)
}
