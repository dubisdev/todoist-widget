import { useEffect, useState } from "react"
import { getDayTasks } from "../../../services/getTodayTasks"
import { Task } from "../../../types/Task"
import { useSelectedDayStore } from "../stores/useSelectedDayStore"

export const useGetTasks = (token: string) => {
    const [loadingTasks, setLoadingTasks] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([])
    const selectedDate = useSelectedDayStore(s => s.day)

    useEffect(() => {
        const intervalId = setInterval(() => {
            getDayTasks(token, selectedDate).then(setTasks)
        }, 1000 * 5)

        setLoadingTasks(true)

        getDayTasks(token, selectedDate).then((t) => {
            setTasks(t)
            setLoadingTasks(false)
        })

        return () => {
            clearInterval(intervalId)
        }
    }, [token, selectedDate])

    return {
        tasks,
        loadingTasks,
    }
}
