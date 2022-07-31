import styles from './navigation-bar.module.css';

export function NavigationBar(props) {
  var Name = props.text || "Hello!";
  return (
    <div>
    {Name}
    </div>
  );
}

export default NavigationBar;
