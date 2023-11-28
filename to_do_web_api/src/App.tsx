import ToDoList from "./components/ToDoList";

function App() {
  let items = ["task1", "task2", "task3"];
  const onSelectedItem = (item: string) => {
    console.log("wybrano:", item);
  };

  return (
    <div>
      <ToDoList items={items} onSelectedItem={onSelectedItem}></ToDoList>
    </div>
  );
}

export default App;
