import { Link } from "react-router-dom"
import type { Task } from "../types/task"
import { useTasks } from "../context/TaskContext"

type Props = {
  task: Task
  selectable?: boolean
  selected?: boolean
  onSelect?: (id: string, checked: boolean) => void
}

export default function TaskCard({ task, selectable, selected, onSelect }: Props) {
  const { updateTask, deleteTask } = useTasks()

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

  return (
    <div className={`rounded-lg border-2 transition-all hover:shadow-lg ${
      selected ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'
    }`}>
      <div className="p-6 space-y-5">
        <div className="flex items-start gap-4">
          {selectable && (
            <div className="flex-shrink-0 pt-1">
              <input
                type="checkbox"
                checked={!!selected}
                onChange={e => onSelect?.(task.id, e.target.checked)}
                className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 cursor-pointer"
                aria-label={`Select task ${task.title}`}
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <Link 
              to={`/task/${task.id}`} 
              className="font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors block"
            >
              {task.title}
            </Link>
            
            {task.category && (
              <div className="text-sm text-gray-500 mt-2 font-medium">
                {task.category}
              </div>
            )}

            {task.description && (
              <p className="text-base text-gray-600 mt-3 line-clamp-2">
                {task.description}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1.5 rounded-md text-sm font-medium border ${statusColors[task.status]}`}>
              {statusLabels[task.status]}
            </span>
            {task.dueDate && (
              <span className="text-sm text-gray-500">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => updateTask(task.id, { status: task.status === "todo" ? "inprogress" : task.status === "inprogress" ? "done" : "todo" })}
            type="button"
            className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
          >
            Update Status
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            type="button"
            className="px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
