import React from "react"

export default function Modal({ open, onClose, children }: { open: boolean, onClose: () => void, children: React.ReactNode }) {
if (!open) return null
return (
<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
<div className="bg-white rounded p-4 w-full max-w-lg">
<div className="mb-2 text-right">
<button onClick={onClose} className="text-sm">Close</button>
</div>
{children}
</div>
</div>
)
}