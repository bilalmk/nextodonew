import TodoListNew from "./todo-list";
import TodoAdd from "./todo-add";

export default function Page() {
  return (
    <div>
      <TodoAdd />
      {/*@ts-ignore */}
      {/* @ts-expect-error Server Component */}
      <TodoListNew />
    </div>
  );
}
