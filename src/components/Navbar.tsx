import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <Link to="/" className="text-lg font-semibold">Task Tracker</Link>
        <nav className="ml-auto flex gap-3">
          <Link to="/" className="text-sm">Home</Link>
        </nav>
      </div>
    </header>
  )
}
