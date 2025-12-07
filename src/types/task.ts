export type TaskStatus = "todo" | "inprogress" | "done"

export interface Task {
id: string
title: string
description?: string
category?: string
dueDate?: string
status: TaskStatus
createdAt: string
}