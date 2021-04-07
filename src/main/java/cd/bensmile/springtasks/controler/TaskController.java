package cd.bensmile.springtasks.controler;


import cd.bensmile.springtasks.domain.Task;
import cd.bensmile.springtasks.service.TaskServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskServiceImpl taskService;


    public TaskController(TaskServiceImpl taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> listTasks() {
        return taskService.list();
    }


    @PostMapping("/save")
    public Task save(@RequestBody Task task) {

        System.out.println("task = " + task.getName());
        return this.taskService.save(task);
    }
}

