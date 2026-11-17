export default function ToDo(props) {
  return (
    <li className={props.completed ? "todo done" : "todo"}>
      <label>
        <input type="checkbox" checked={props.completed} onChange={props.onToggle} />
        {props.text}
      </label>
    </li>
  );
}