import React, { useContext } from "react";
import TodoStore from "./TodoStore";

const todoStore = new TodoStore();

const TodoContext = React.createContext<typeof todoStore>(todoStore)

//自定义hook
const useStore = () => {
    const store = useContext(TodoContext);
    if(!store){
        throw Error('no store');
    }
    return store;
}

export {
    todoStore,
    TodoContext,
    useStore
}
