import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core";
import {map} from 'rxjs/operators';
import {Task} from "./task.models";

// @ts-ignore
@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get("/api/tasks");
    }


    saveTask(task : Task, checked : boolean){

        task.completed = checked;

        return this.http.post("/api/tasks/save", task);

    }
}
