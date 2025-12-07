import React, { useState } from "react"
import { useTasks } from "../context/TaskContext"
import type { TaskStatus } from "../types/task"

export default function TaskForm() {
  const { addTask } = useTasks()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [status, setStatus] = useState<TaskStatus>("todo")

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    addTask({ title, description, category, dueDate, status })
    setTitle("")
    setDescription("")
    setCategory("")
    setDueDate("")
    setStatus("todo")
  }

  return (
    <form 
      id="task-form" 
      aria-label="Add task form" 
      onSubmit={submit} 
      className="bg-white rounded-xl shadow-md border border-gray-100 p-10 space-y-8"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create New Task</h2>
      
      <div className="space-y-2">
        <label htmlFor="task-title" className="block text-base font-medium text-gray-700">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
          className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="task-description" className="block text-base font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="task-description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Add task description (optional)"
          rows={4}
          className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-base"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="task-category" className="block text-base font-medium text-gray-700">
            Category
          </label>
          <input
            id="task-category"
            type="text"
            placeholder="e.g., Work, Personal"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="task-due-date" className="block text-base font-medium text-gray-700">
            Due Date
          </label>
          <input
            id="task-due-date"
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="task-status" className="block text-base font-medium text-gray-700">
          Status
        </label>
        <select
          id="task-status"
          value={status}
          onChange={e => setStatus(e.target.value as TaskStatus)}
          className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-medium text-base hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
      >
        Add Task
      </button>
    </form>
  )
}