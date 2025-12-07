import { useMemo, useState } from "react"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import FilterBar from "../components/FilterBar"
import { useTasks } from "../context/TaskContext"
import type { TaskStatus } from "../types/task"

type Filters = { status: TaskStatus | "all"; category: string }

export default function Home() {
  const { tasks } = useTasks()
  const [filters, setFilters] = useState<Filters>({ status: "all", category: "" })

  const visible = useMemo(
    () => tasks.filter(t => 
      (filters.status === "all" || t.status === filters.status) &&
      (!filters.category || t.category?.toLowerCase().includes(filters.category.toLowerCase()))
    ),
    [tasks, filters]
  )

  return (
    <div className="space-y-4">
      <TaskForm />
      <FilterBar onFilter={setFilters} />
      <TaskList tasks={visible} />
    </div>
  )
}
