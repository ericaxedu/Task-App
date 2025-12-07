import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1 p-4 max-w-4xl mx-auto w-full">{children}</main>
<Footer />
</div>
)
}