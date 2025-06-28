import { useTokenStore } from "../Settings/store/useTokenStore"
import { LoadingIndicator } from "./components/LoadingIndicator"
import { TaskList } from "./components/TaskList"
import { useGetTasks } from "./hooks/useGetTasks"

export const HomePage = () => {
    const token = useTokenStore(state => state.token)

    const { tasks, loadingTasks } = useGetTasks(token)

    if (loadingTasks) return <LoadingIndicator />

    return <TaskList tasks={tasks} />
}
