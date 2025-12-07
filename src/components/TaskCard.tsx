import { Link } from "react-router-dom"
import type { Task } from "../types/task"
import { useTasks } from "../context/TaskContext"

export default function TaskCard({ task }: { task: Task }) {
  const { updateTask, deleteTask } = useTasks()

  return (
    <div className="bg-white p-3 rounded shadow flex flex-col">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <Link to={`/task/${task.id}`} className="font-semibold">{task.title}</Link>
          <div className="text-xs text-gray-500">{task.category || "No category"}</div>
          <div className="text-sm mt-2">{task.description}</div>
        </div>
        <div className="text-right">
          <div className="text-xs">{new Date(task.createdAt).toLocaleDateString()}</div>
          <div className="mt-2 flex flex-col gap-2">
            <button
              onClick={() => updateTask(task.id, { status: task.status === "todo" ? "inprogress" : "done" })}
              className="text-sm px-2 py-1 border rounded"
            >
              Toggle
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-sm px-2 py-1 border rounded text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
