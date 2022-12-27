import { useState } from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.svg";
import plus from "./assets/plus.svg";
import "./global.css";
import { Tasks } from "./Components/Tasks";
import { Empty } from "./Components/Empty";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([] as string[]);
  const [tasksCompleted, setTasksCompleted] = useState([] as string[]);

  function handleAddTask() {
    if(newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }else {
      alert('Task is empty');
    }
 
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <h1>
            <span>to</span>
            <span>do</span>
          </h1>
        </div>
      </header>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>
          Criar <img src={plus} alt="" />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.tasksInfo}>
          <div className={styles.created}>
            <span>Tarefas criadas</span>{" "}
            <span className={styles.counter}>{tasks.length}</span>
          </div>
          <div className={styles.done}>
            <span>Concluídas</span>{" "}
            <span className={styles.counter}>{tasksCompleted.length}</span>
          </div>
        </div>{" "}
        <div className={styles.taskList}>
          {tasks.length ? (
            <Tasks
              options={tasks}
              value={tasksCompleted}
              setValue={setTasksCompleted}
            />
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
