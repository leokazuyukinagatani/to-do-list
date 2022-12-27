import clipboard from "../assets/clipboard.svg";
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="" />
      <p>
        <span>Você ainda não tem tarefas cadastradas</span>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
