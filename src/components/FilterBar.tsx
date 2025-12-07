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

  return (
    <div className="bg-white p-3 rounded shadow flex gap-2 items-center">
      <select
        value={status}
        onChange={e => setStatus(e.target.value as TaskStatus | "all")}
        className="border p-2 rounded"
      >
        {statusOptions.map(s => (
          <option key={s} value={s}>
            {s === "all" ? "All" : s === "todo" ? "To do" : s === "inprogress" ? "In progress" : "Done"}
          </option>
        ))}
      </select>
      <input
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <button onClick={apply} className="bg-gray-800 text-white px-3 py-1 rounded">
        Apply
      </button>
    </div>
  )
}
