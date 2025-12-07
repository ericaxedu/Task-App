import { useParams, Link } from "react-router-dom"
import { useTasks } from "../context/TaskContext"

export default function TaskDetails() {
  const { id } = useParams()
  const { tasks, updateTask } = useTasks()
  const task = tasks.find(t => t.id === id)

  if (!task) {
    return <div>Task not found. <Link to="/">Go home</Link></div>
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{task.title}</h2>
      <div className="text-sm text-gray-500">{task.category}</div>
      <p className="mt-2">{task.description}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => updateTask(task.id, { status: "inprogress" })}
          className="px-3 py-1 border rounded"
        >
          Mark in progress
        </button>
        <button
          onClick={() => updateTask(task.id, { status: "done" })}
          className="px-3 py-1 border rounded"
        >
          Mark done
        </button>
      </div>
    </div>
  )
}
