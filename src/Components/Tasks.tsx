import { Dispatch, SetStateAction } from 'react';
import styles from './Tasks.module.css'

interface TasksProps {
  options: string[];
  value: string[];
  setValue: Dispatch<SetStateAction<string[]> | []> ;
}

export function Tasks({ options, value, setValue, ...rest }: TasksProps) {
  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue: string) => itemValue !== target.value));
    }
  }

  return (
    <div className={styles.tasks}>
      {options.map((option: string) => (
        <div className={styles.card} key={option}>
         
            <input
              className={styles.checkbox}
              type="checkbox"
              value={option}
              {...rest}
              onChange={handleChange}
              checked={value.includes(option)}
            />
            <p>
              {option}
            </p>
          
        </div>
      ))}
    </div>
  );
}
