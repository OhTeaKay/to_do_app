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
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
