import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
        {
            id: 't4',
            userId: 'u4',
            title: 'Create a logo',
            summary: 'Create a logo for the online shop website',
            dueDate: '2024-06-15',
        },
        {
            id: 't5',
            userId: 'u5',
            title: 'Create a landing page',
            summary: 'Create a landing page for the online shop website',
            dueDate: '2024-06-15',
        },
        {
            id: 't6',
            userId: 'u6',
            title: 'Create a product page',
            summary: 'Create a product page for the online shop website',
            dueDate: '2024-06-15',
        },

    ];

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(task: NewTaskData, userId: string): void {
        this.tasks.unshift({
            id: Math.random().toString(),
            userId: userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.dueDate
        });
        this.saveTasks();
    }
    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasks();
    }
    constructor() { 
        const tasks=localStorage.getItem('tasks');
        if(tasks){
            this.tasks=JSON.parse(tasks);
        }
    }
    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
}