interface Props {
  id: number;
  task: string;
  done?: "True" | "False";
  cathegory: string;
}

function Task({ id, task, done, cathegory }: Props) {
  return (
    <>
      <div>
        {id}, {task}, {done}, {cathegory}
      </div>
    </>
  );
}

export default Task;
