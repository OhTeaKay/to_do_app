import Task from "./Task";
interface Props {
  items: string[];
  onSelectedItem: (item: string) => void;
}

function ToDoList({ items, onSelectedItem }: Props) {
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => {
              onSelectedItem(item);
            }}
          >
            {item}
            <Task
              id={1}
              task="Spacer z psem"
              done="False"
              cathegory="Dom"
            ></Task>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
