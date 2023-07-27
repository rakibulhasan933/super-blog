import { PopupProps } from '@/type';
import { useRouter } from 'next/navigation';
import React from 'react'

function Popup({ isOpen, onClose, deleteId, deleteTitle, email, userSender }: PopupProps) {
	const router = useRouter();
	if (!isOpen) return null;
	const handleDeleted = async (id: string) => {
		try {
			const res = await fetch(`/api/posts/${id}`, {
				method: "DELETE"
			});
			if (res.ok) {
				onClose();
				alert("Blog Deleted successfully");
				await userSender(email);
			}
		} catch (error) {
			console.log(error)
			return new Error("Failed Deleted Blogs");
		}
	}
	return (
		<div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50">
			<div className="p-8 bg-white rounded-lg">
				<h2 className="mb-4 text-xl font-semibold">{deleteTitle}</h2>
				<p>This is the content of the popup.</p>
				<div className="flex justify-around">
					<button onClick={() => handleDeleted(deleteId)} className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg">
						Yes
					</button>
					<button className="px-4 py-2 mt-4 text-white bg-green-500 rounded-lg" onClick={onClose}>
						No
					</button>
				</div>
			</div>
		</div>
	)
}

export default Popup