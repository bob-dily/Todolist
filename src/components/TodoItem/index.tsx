import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react'
import { useStore } from '../../store';
import { ITodo } from '../../types'

interface IProps{
    todo: ITodo
}

const TodoItem: FC<IProps> = ({
  todo
}):ReactElement => {
  const store = useStore();
  return (
    <div className="todoItem">
      <input type="checkbox" name="" id="" checked={ todo.finished } onChange={ () => store.toggleTodo(todo.id) } />
      <span style={{ textDecoration: todo.finished ? "line-through" : "none" }}>{todo.content}</span>
      <button onClick={ () => store.removeTodo(todo.id) }>删除</button>
    </div>
  )
}

export default observer(TodoItem);