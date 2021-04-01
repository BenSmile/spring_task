package cd.bensmile.springtasks.service;

import cd.bensmile.springtasks.domain.Task;



public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
