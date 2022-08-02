import styles from './button.module.css';

export function Button(props) {
  return (
    <div className={styles['container']}>
      <a href={props.linkto || "https://www.google.com"}>
      <button style={{color: props.color || "#fe0000", backgroundColor: props.bgcolor || "#ffffff", borderRadius: props.cornerRadius || 10, padding: props.padding || 5}}>{props.text || "button"}</button>
      </a>
    </div>
  );
}

export default Button;
