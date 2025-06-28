import { useEffect, useState } from "react"
import { getDayTasks } from "../../../services/getTodayTasks"
import { Task } from "../../../types/Task"
import { useSelectedDayStore } from "../stores/useSelectedDayStore"

export const useGetTasks = (token: string) => {
    const [loadingTasks, setLoadingTasks] = useState(true)
    const [isError, setIsError] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([])
    const selectedDate = useSelectedDayStore(s => s.day)

    const handleGetTasks = async () => {
        try {
            const fetchedTasks = await getDayTasks(token, selectedDate)
            setTasks(fetchedTasks)
            setLoadingTasks(false)
            setIsError(false)
        } catch (error) {
            setLoadingTasks(false)
            setIsError(true)
        }
    }

    useEffect(() => {
        const intervalId = setInterval(handleGetTasks, 1000 * 5)

        handleGetTasks()

        return () => clearInterval(intervalId)
    }, [token, selectedDate])

    return {
        tasks,
        isError,
        loadingTasks,
    }
}
