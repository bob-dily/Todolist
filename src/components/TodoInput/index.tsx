import React, { useRef, FC, ReactElement } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store";
import tdInputStyle from "./styles/index.module.scss";

const TodoInput: FC = (): ReactElement => {
  const store = useStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (e: React.KeyboardEvent): void => {
    //判断当前点击的是否是回车键
    if (e.key !== "Enter") {
      return;
    }

    const val: string = inputRef.current!.value.trim();

    if (val.length) {
      //查看当前输入的待办事项是否已经存在
      const isExist = store.todoList.find((todo) => todo.content === val);

      //输入的事项已经存在，弹窗提醒
      if (isExist) {
        alert("已存在该项,请勿重复输入！");
        inputRef.current!.value = "";
        return;
      }
      //当前输入事项不存在，添加到todoList
      store.addTodo({
        id: new Date().getTime(),
        content: val,
        finished: false,
      });
      //清空输入框
      inputRef.current!.value = "";
    }
  };

  return (
    <div className={tdInputStyle.todoInput}>
      <input
        className="input"
        type="text"
        placeholder="请输入待办事项"
        onKeyPress={addItem}
        ref={inputRef}
      />
    </div>
  );
};

export default observer(TodoInput);
