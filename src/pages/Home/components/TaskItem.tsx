import { Task } from "../../../types/Task"

interface TaskCompleteMarkProps {
    priority?: number
    isCompleted?: boolean
}

export const TaskCompleteMark = ({ priority, isCompleted = false }: TaskCompleteMarkProps) => {
    const priorityColor = priority ? `var(--p${priority}-color, #808080)` : '#808080';

    return (
        <div className="relative w-4 h-4">
            {/* Outer circle with priority color */}
            <div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: priorityColor }}
            />
            {/* Inner circle that appears on hover/completion */}
            <div
                className={`absolute inset-1 rounded-full cursor-pointer transition-colors duration-200 ${isCompleted
                    ? `bg-current`
                    : 'bg-transparent hover:bg-accent'
                    }`}
                style={{ color: isCompleted ? priorityColor : 'transparent' }}
            />
        </div>
    )
}

interface TaskItemProps {
    task: Task
}

export const TaskItem = (props: TaskItemProps) => {
    return <div className="hover:bg-gray-500 flex items-center justify-between bg-secondary px-1 py-0.5 rounded-md cursor-pointer">
        <div className="flex items-center gap-3">
            <TaskCompleteMark
                priority={props.task.priority}
                isCompleted={false} // This will be replaced with props.task.completed when available
            />
            <span className="text-secondary-foreground text-md">
                {props.task.title}
            </span>
        </div>
    </div>
}
