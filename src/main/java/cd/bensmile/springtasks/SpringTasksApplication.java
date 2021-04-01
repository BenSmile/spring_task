package cd.bensmile.springtasks;

import cd.bensmile.springtasks.domain.Task;
import cd.bensmile.springtasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class SpringTasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringTasksApplication.class, args);
	}



	@Bean
	CommandLineRunner runner(TaskService taskService){

		return args -> {

			taskService.save(new Task(1L, "Create Springboot application", LocalDate.now(), true));

			taskService.save(new Task(2L, "Create java application", LocalDate.now(), false));
			taskService.save(new Task(3L, "Watching tutos", LocalDate.now(), true));
			taskService.save(new Task(4L, "Create Springboot project", LocalDate.now(), true));
			taskService.save(new Task(5L, "Create Flask application", LocalDate.now(), false));
		};

	}
}
