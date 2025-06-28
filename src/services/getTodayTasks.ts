import { TodoistApi, Task as TodoistApiTask, TodoistRequestError } from "@doist/todoist-api-typescript"
import { Task } from "../types/Task"

export const getTodayTasks = async (token: string): Promise<Task[]> => {
    const client = new TodoistApi(token)

    const tasks: TodoistApiTask[] = []

    let cursor = null

    do {
        try {

            const response = await client.getTasksByFilter({
                query: "today | overdue",
                limit: 200,
                cursor: cursor
            })

            cursor = response.nextCursor

            tasks.push(...response.results)
        } catch (error) {
            console.log(error)
            cursor = null // Reset cursor on error
        }
    } while (cursor)

    return tasks.map(t => ({
        id: t.id,
        title: t.content,
        priority: t.priority
    }))
}
