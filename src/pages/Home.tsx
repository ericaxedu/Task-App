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
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Task Tracker
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Organize your tasks efficiently and stay on top of your goals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <TaskForm />
          </div>
        </aside>

        <main className="lg:col-span-2 space-y-6">
          <FilterBar onFilter={setFilters} />
          <TaskList tasks={visible} />
        </main>
      </div>
    </div>
  )
}
