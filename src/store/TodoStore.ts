import { makeObservable, observable, action } from "mobx";
import { ITodo } from "../types";

class TodoStore {
  constructor() {
    makeObservable(this, {
      todoList: observable,
      addTodo: action,
      toggleTodo: action,
      removeTodo: action,
    });
  }

  //todoList初始化
  todoList: ITodo[] = JSON.parse(localStorage.getItem("todoList") as string) || [];

  //添加一个todo到todolist
  addTodo(todo: ITodo) {
    this.todoList.push(todo);
  }
  //改变todo的状态
  toggleTodo(id: number) {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, finished: !todo.finished } : todo
    );
  }
  //删除一个todo
  removeTodo(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}

export default TodoStore;
