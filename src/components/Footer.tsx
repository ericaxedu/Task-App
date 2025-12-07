export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-gray-200/50 mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>© 2025 Task Tracker</span>
            <span className="text-gray-400">•</span>
            <span>Organize your life</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 font-medium">Built with</span>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 text-xs font-semibold shadow-sm">
                Vite
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-semibold shadow-sm">
                React
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold shadow-sm">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
