import {Component, OnInit} from '@angular/core';
import {Task} from "../task.models";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


    tasks: Task[] = [];


    constructor() {
    }


    ngOnInit(): void {
        this.tasks.push(new Task(1, "Tuto Spring boot", true, "04/20/2021")),
            this.tasks.push(new Task(2, "Spring boot", true, "04/20/2021")),
            this.tasks.push(new Task(3, "Java ee boot", true, "04/20/2021")),
            this.tasks.push(new Task(4, "Tuto boot", false, "04/20/2021"))
    }


    getDueDateLabel(task: Task) {
        return task.completed ? 'label-success' : 'label-primary';
    }

    onTaskChange(event, task) {
        console.log("Task changed = ", event.target.checked)
        // this.taskService(task, event.target.checked).subscribe();
    }

}
