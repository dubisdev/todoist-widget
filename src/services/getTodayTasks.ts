import { TodoistApi, Task as TodoistApiTask } from "@doist/todoist-api-typescript"
import { Task } from "../types/Task"
import { formatDateDisplay } from "../utils/time"

export const getDayTasks = async (token: string, date: Date): Promise<Task[]> => {
    const client = new TodoistApi(token)

    const tasks: TodoistApiTask[] = []

    let cursor = null

    let query = formatDateDisplay(date)

    if (query === "TODAY") query += " | overdue"

    do {
        try {

            const response = await client.getTasksByFilter({
                query,
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
