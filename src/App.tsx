import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <>
      <h1>Todo List</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </>
  );
};

export default App;
