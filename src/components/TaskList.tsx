import TaskCard from "./TaskCard"
import type { Task } from "../types/task"

export default function TaskList({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return <div className="text-center text-sm text-gray-500">No tasks</div>
  }

  return (
    <div className="grid gap-3">
      {tasks.map(t => <TaskCard key={t.id} task={t} />)}
    </div>
  )
}
