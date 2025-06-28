import { useEffect, useState } from "react"
import { getTodayTasks } from "../../../services/getTodayTasks"
import { Task } from "../../../types/Task"

export const useGetTasks = (token: string) => {
    const [loadingTasks, setLoadingTasks] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const intervalId = setInterval(() => {
            getTodayTasks(token).then(setTasks)
        }, 1000 * 5)

        setLoadingTasks(true)

        getTodayTasks(token).then((t) => {
            setTasks(t)
            setLoadingTasks(false)
        })

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return {
        tasks,
        loadingTasks,
    }
}
