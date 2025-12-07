import React from "react"

export default function Modal({ open, onClose, children }: { open: boolean, onClose: () => void, children: React.ReactNode }) {
if (!open) return null
return (
	<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-6">
		<div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 w-full max-w-2xl border border-transparent shadow-lg">
			<div className="mb-4 flex justify-end">
				<button
					onClick={onClose}
					className="text-sm px-3 py-1 rounded-md bg-white/40 hover:shadow-sm"
					aria-label="Close modal"
				>
					Close
				</button>
			</div>
			{children}
		</div>
	</div>
)
}