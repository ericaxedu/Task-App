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
<form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-3">
<div>
<label className="block text-sm">Title</label>
<input value={title} onChange={e => setTitle(e.target.value)} className="w-full border p-2 rounded" />
</div>
<div>
<label className="block text-sm">Description</label>
<textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border p-2 rounded" rows={3} />
</div>
<div className="flex gap-2">
<input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} className="flex-1 border p-2 rounded" />
<input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="border p-2 rounded" />
</div>
<div className="flex items-center gap-2">
<label className="text-sm">Status</label>
<select value={status} onChange={e => setStatus(e.target.value as TaskStatus)} className="border p-2 rounded">
<option value="todo">To do</option>
<option value="inprogress">In progress</option>
<option value="done">Done</option>
</select>
<button type="submit" className="ml-auto bg-blue-600 text-white px-3 py-1 rounded">Add Task</button>
</div>
</form>
)
}