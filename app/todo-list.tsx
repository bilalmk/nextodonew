import Todo from "./todo";

const getTodo = async () => {
  let todos = await fetch("https://todoapisnew.vercel.app/api/todo/list");
  return await todos.json();
};

const TodoList = async () => {
  const { todos } = await getTodo();
  //console.log(todos);
  return (
    <>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: { id: string; name: string; isDone: boolean }) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export async function getServerSideProps() { 
  const todos = await getTodo();

  // The next line will only be logged on the server and never on the browser console even if we make 
  // client-side navigation.
  // This confirms that `getServerSideProps` is guaranteed to run on the server and never on the client (or browser).
  console.log(todos[0]);

  return {
      props: {
        todos:todos
      }
  }
}

export default TodoList;
