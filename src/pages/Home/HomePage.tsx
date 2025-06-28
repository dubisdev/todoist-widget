import { Redirect } from "wouter"
import { useTokenStore } from "../Settings/store/useTokenStore"
import { LoadingIndicator } from "./components/LoadingIndicator"
import { TaskList } from "./components/TaskList"
import { useGetTasks } from "./hooks/useGetTasks"

export const HomePage = () => {
    const token = useTokenStore(state => state.token)

    if (!token) return <Redirect to="/settings" />

    const { tasks, loadingTasks, isError } = useGetTasks(token)

    if (isError) return <div className="text-center text-red-500">
        ❌ Error loading tasks.
        <br />
        <small>Please check your API token in Settings and your Internet connection</small>
    </div>

    if (loadingTasks) return <LoadingIndicator />

    if (tasks.length === 0) return <div className="text-center text-muted-foreground">🎉 No tasks remaining</div>

    return <TaskList tasks={tasks} />
}
