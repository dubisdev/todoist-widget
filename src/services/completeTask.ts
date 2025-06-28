import { TodoistApi } from "@doist/todoist-api-typescript"

export const completeTask = async ({ taskId, token }: { taskId: string, token: string }) => {
    const client = new TodoistApi(token)

    await client.closeTask(taskId)
}
