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

  const isFinished = () => {
    if(todo.finished){
      return (
        <span className="isFinished" style={{ background: "yellowgreen" }} >已完成</span>
      )
    }
    return (
      <span className="isFinished"style={{ background: "rgb(205, 120, 50)" }}>待办</span>
    )
  }

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
      {isFinished()}
      <button className="deleteBtn" onClick={() => store.removeTodo(todo.id)}>
        删除
      </button>
    </div>
  );
};

export default observer(TodoItem);
