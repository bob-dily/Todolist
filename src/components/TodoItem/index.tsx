import React, { FC, ReactElement } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store";
import { ITodo } from "../../types";
import tdItemStyle from "./styles/index.module.scss";

interface IProps {
  todo: ITodo;
}

const TodoItem: FC<IProps> = ({ todo }): ReactElement => {
  const store = useStore();
  return (
    <div
      className={tdItemStyle.todoItem}
      style={{
        background: todo.finished ? "rgb(219, 219, 219)" : "rgb(204, 237, 252)",
      }}
    >
      <input
        className="checkbox"
        type="checkbox"
        name=""
        id=""
        checked={todo.finished}
        onChange={() => store.toggleTodo(todo.id)}
      />

      <span
        className="itemText"
        style={{ textDecoration: todo.finished ? "line-through" : "none" }}
      >
        {todo.content}
      </span>

      <button className="deleteBtn" onClick={() => store.removeTodo(todo.id)}>
        删除
      </button>
    </div>
  );
};

export default observer(TodoItem);
