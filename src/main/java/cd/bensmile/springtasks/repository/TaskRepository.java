package cd.bensmile.springtasks.repository;

import cd.bensmile.springtasks.domain.Task;
import org.springframework.data.repository.CrudRepository;



public interface TaskRepository extends CrudRepository<Task, Long> {


}
