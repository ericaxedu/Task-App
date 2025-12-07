import { useState } from "react"
import type { TaskStatus } from "../types/task"

type FilterBarProps = {
  onFilter: (filters: { status: TaskStatus | "all"; category: string }) => void
}

export default function FilterBar({ onFilter }: FilterBarProps) {
  const [status, setStatus] = useState<TaskStatus | "all">("all")
  const [category, setCategory] = useState("")

  const statusOptions: (TaskStatus | "all")[] = ["all", "todo", "inprogress", "done"]

  function apply() {
    onFilter({ status, category })
  }

  function handleStatusChange(newStatus: TaskStatus | "all") {
    setStatus(newStatus)
    onFilter({ status: newStatus, category })
  }

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory)
    onFilter({ status, category: newCategory })
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex items-center gap-2 flex-shrink-0">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">Filters</span>
        </div>

        <div className="flex-1 min-w-0">
          <select
            id="filter-status"
            value={status}
            onChange={e => handleStatusChange(e.target.value as TaskStatus | "all")}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer"
          >
            {statusOptions.map(s => (
              <option key={s} value={s}>
                {s === "all" ? "All Status" : s === "todo" ? "To Do" : s === "inprogress" ? "In Progress" : "Done"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-0">
          <input
            id="filter-category"
            type="text"
            placeholder="Search by category..."
            value={category}
            onChange={e => handleCategoryChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          onClick={apply}
          type="button"
          className="px-5 py-2 bg-purple-600 text-white rounded-lg font-medium text-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors whitespace-nowrap"
        >
          Apply
        </button>
      </div>
    </div>
  )
}
