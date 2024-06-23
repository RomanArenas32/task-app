export interface Task {
    id: string;
    description: string;
    completed: boolean;
}

export interface TaskState {
    taskCount : number;
    tasks: Task[];
    completed: number;
    pending: number;
}