import React, { FC, ReactElement, useEffect } from "react";
import { observer } from "mobx-react";
import TodoInput from "../TodoInput";
import List from "../List";
import tdListStyle from "./styles/index.module.scss";
import { useStore } from "../../store";

const TodoList: FC = (): ReactElement => {
  const store = useStore();

  //当todoList发生变化时重新设置localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(store.todoList));
  }, [store.todoList,store.todoList.length]);

  return (
    <div className={tdListStyle.todoList}>
      <h3>TODOLIST</h3>
      <TodoInput />
      <List />
    </div>
  );
};

export default observer(TodoList);
