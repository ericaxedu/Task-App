import { useParams, Link, useNavigate } from "react-router-dom"
import { useTasks } from "../context/TaskContext"
import type { TaskStatus } from "../types/task"

export default function TaskDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { tasks, updateTask, deleteTask } = useTasks()
  const task = tasks.find(t => t.id === id)

  if (!task) {
    return (
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-500 font-medium text-lg mb-2">Task not found</p>
          <p className="text-base text-gray-400 mb-6">The task you're looking for doesn't exist or has been deleted.</p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    )
  }

  const statusColors = {
    todo: "bg-pink-100 text-pink-700 border-pink-200",
    inprogress: "bg-purple-100 text-purple-700 border-purple-200",
    done: "bg-green-100 text-green-700 border-green-200"
  }

  const statusLabels = {
    todo: "To Do",
    inprogress: "In Progress",
    done: "Done"
  }

  function handleStatusChange(newStatus: TaskStatus) {
    if (!task) return
    updateTask(task.id, { status: newStatus })
  }

  function handleDelete() {
    if (!task) return
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id)
      navigate("/")
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Tasks
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-10 space-y-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{task.title}</h1>
            {task.category && (
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium mb-4">
                {task.category}
              </div>
            )}
          </div>
          <span className={`px-4 py-2 rounded-lg text-sm font-semibold border ${statusColors[task.status]}`}>
            {statusLabels[task.status]}
          </span>
        </div>

        {task.description && (
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Description</h2>
            <p className="text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
              {task.description}
            </p>
          </div>
        )}

        <div className="pt-6 border-t border-gray-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {task.dueDate && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Due Date</h3>
                <p className="text-base text-gray-900">
                  {new Date(task.dueDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Created</h3>
              <p className="text-base text-gray-900">
                {new Date(task.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions</h2>
          <div className="flex flex-wrap gap-3">
            {task.status !== "todo" && (
              <button
                onClick={() => handleStatusChange("todo")}
                className="px-5 py-2.5 bg-pink-600 text-white rounded-lg font-medium text-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
              >
                Mark as To Do
              </button>
            )}
            {task.status !== "inprogress" && (
              <button
                onClick={() => handleStatusChange("inprogress")}
                className="px-5 py-2.5 bg-purple-600 text-white rounded-lg font-medium text-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
              >
                Mark as In Progress
              </button>
            )}
            {task.status !== "done" && (
              <button
                onClick={() => handleStatusChange("done")}
                className="px-5 py-2.5 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Mark as Done
              </button>
            )}
            <button
              onClick={handleDelete}
              className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
