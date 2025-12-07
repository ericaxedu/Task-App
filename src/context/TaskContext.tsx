import { createContext, useContext, useEffect, useState } from "react"
import type { Task } from "../types/task"

type TaskContextType = {
  tasks: Task[]
  addTask: (t: Omit<Task, "id" | "createdAt">) => void
  updateTask: (id: string, patch: Partial<Task>) => void
  deleteTask: (id: string) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)
const STORAGE_KEY = "my-task-app.tasks"

interface TaskProviderProps {
  children: React.ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask(payload: Omit<Task, "id" | "createdAt">) {
    const newTask: Task = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...payload
    }
    setTasks(prev => [newTask, ...prev])
  }

  function updateTask(id: string, patch: Partial<Task>) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, ...patch } : t)))
  }

  function deleteTask(id: string) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  const ctx = useContext(TaskContext)
  if (!ctx) throw new Error("useTasks must be used inside TaskProvider")
  return ctx
}
