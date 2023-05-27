import React from "react";
import { Todo } from "../model";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { MdDoneOutline } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodo }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}
      
      </span>
      <div>
      <span className="icon">
          <AiOutlineEdit />
        </span>
        <span className="icon">
          <HiOutlineTrash />
        </span>
        <span className="icon">
          <MdDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
