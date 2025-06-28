import { TaskItem } from "./TaskItem"
import { Task } from "../../../types/Task"

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
    return <div className="flex flex-col gap-1">
        {tasks.map(t => <TaskItem key={t.id} task={t} />)}
    </div>
}
