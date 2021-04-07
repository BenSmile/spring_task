import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {TasksListComponent} from './tasks/tasks-list/tasks-list.component';
import {TasksAddComponent} from './tasks/tasks-add/tasks-add.component';
import {TaskService} from "./tasks/task.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TasksListComponent,
        TasksAddComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
