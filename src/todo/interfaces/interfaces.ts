export interface Task {
    id: string;
    title: string;
    description: string;
    expiration: string;
    priority: string;
    completed: boolean;
}

export interface TaskState {
    taskCount : number;
    tasks: Task[];
    completed: number;
    pending: number;
}