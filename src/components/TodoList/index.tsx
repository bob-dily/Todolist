import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react'
import TodoInput from '../TodoInput';
import List from '../List';
import  './styles/index.sass'



const TodoList: FC = (): ReactElement => {
  
  return (
    <div className="todoList">
      <TodoInput />
      <List />
    </div>
  )
}

export default observer(TodoList);
