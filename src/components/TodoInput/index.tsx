import React, { useRef, FC, ReactElement } from 'react';
import { observer } from 'mobx-react'
import { useStore } from '../../store';

const TodoInput: FC = (): ReactElement => {
  
  const store = useStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void =>{
    const val: string = inputRef.current!.value.trim();

    if(val.length){
      const isExist = store.todoList.find(todo => todo.content === val);
      if(isExist){
        alert('已存在该项')
        return;
      }
      store.addTodo({
        id: new Date().getTime(),
        content: val,
        finished: false
      })
      inputRef.current!.value = '';
    }
  }

  return (
    <div className="todoInput">
      <input type="text" placeholder="请输入待办事项" ref={ inputRef } />
      <button onClick={addItem} >添加</button>
    </div>
  )
}

export default observer(TodoInput);