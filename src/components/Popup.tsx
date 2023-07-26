import React from 'react'
interface deleteBlogsProps {
	id: string;
	title: string;
}
interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	deleteId: string;
	deleteTitle: string;
}
function Popup({ isOpen, onClose, deleteId, deleteTitle }: PopupProps) {
	if (!isOpen) return null;
	const handleDeleted = (id: string) => {
		console.log(`click${id}`);
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