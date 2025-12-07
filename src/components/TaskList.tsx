import TaskCard from "./TaskCard"
import type { Task } from "../types/task"
import { useState } from "react"
import { useTasks } from "../context/TaskContext"

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const { updateTask, deleteTask } = useTasks()
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [action, setAction] = useState<string>("mark-done")

  function toggleSelect(id: string, checked: boolean) {
    setSelected(prev => ({ ...prev, [id]: checked }))
  }

  function selectAll(checked: boolean) {
    const map: Record<string, boolean> = {}
    tasks.forEach(t => (map[t.id] = checked))
    setSelected(map)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ids = Object.keys(selected).filter(id => selected[id])
    if (ids.length === 0) return

    if (action === "mark-done") {
      ids.forEach(id => updateTask(id, { status: "done" }))
    } else if (action === "delete") {
      ids.forEach(id => deleteTask(id))
    }

    setSelected({})
  }

  const selectedCount = Object.keys(selected).filter(id => selected[id]).length
  const allSelected = tasks.length > 0 && tasks.every(t => selected[t.id])

  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-16 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p className="text-gray-500 font-medium text-lg">No tasks found</p>
        <p className="text-base text-gray-400 mt-2">Create a new task to get started</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4 flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            Tasks <span className="text-sm font-normal text-gray-500">({tasks.length})</span>
          </h3>
          {tasks.length > 0 && (
            <label className="inline-flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
              <input 
                type="checkbox" 
                onChange={e => selectAll(e.target.checked)} 
                checked={allSelected}
                className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 cursor-pointer"
              />
              <span>Select all</span>
            </label>
          )}
        </div>

        {selectedCount > 0 && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-purple-600">{selectedCount}</span> selected
            </div>
            <select 
              value={action} 
              onChange={e => setAction(e.target.value)} 
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              <option value="mark-done">Mark as Done</option>
              <option value="delete">Delete Selected</option>
            </select>
            <button 
              type="submit" 
              className="px-5 py-2 bg-purple-600 text-white rounded-lg font-medium text-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            >
              Apply
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tasks.map(t => (
          <TaskCard 
            key={t.id} 
            task={t} 
            selectable 
            selected={!!selected[t.id]} 
            onSelect={toggleSelect} 
          />
        ))}
      </div>
    </form>
  )
}
