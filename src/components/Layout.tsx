import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
			<Navbar />

			<main className="flex-1 w-full">
				{children}
			</main>

			<Footer />
		</div>
	)
}