import { useTokenStore } from "../Settings/store/useTokenStore"
import { LoadingIndicator } from "./components/LoadingIndicator"
import { TaskList } from "./components/TaskList"
import { useGetTasks } from "./hooks/useGetTasks"

export const HomePage = () => {
    const token = useTokenStore(state => state.token)

    const { tasks, loadingTasks } = useGetTasks(token)

    if (loadingTasks) return <LoadingIndicator />

    if (tasks.length === 0) return <div className="text-center text-muted-foreground">🎉 No tasks remaining</div>

    return <TaskList tasks={tasks} />
}
