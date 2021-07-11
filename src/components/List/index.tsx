import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react'
import TodoItem from '../TodoItem';
import { ITodo } from '../../types'
import { useStore } from '../../store';


const List: FC = (): ReactElement => {

  const store = useStore();

  return (
    <div>
      {
        store.todoList && store.todoList.map((todo: ITodo) => {
          return (
            <TodoItem 
              key={ todo.id }
              todo={ todo }
            />
          );
        })
      }
    </div>
  )
}

export default observer(List);