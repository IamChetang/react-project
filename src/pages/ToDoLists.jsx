import React from "react";
import { useToDoStrore } from "../store/todoStore";
const ToDoLists = () => {
  const [todoValue, setTodoValue] = React.useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useToDoStrore(
    (state) => state
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  };
    return <>

    <section  className="main_section">
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center items-center">
        <label htmlFor="new-todo "   className="text-1xl">New Todo</label>
        <input
          type="text"
          id="new-todo"
          name="newTodo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}  className="flex gap-3 flex-row" >
              <span
            
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "unset"
                }}
              >
                {todo.text}{" "}
              </span>
              {!todo.isCompleted ? (
                <button className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => completeTodo(todo.id)}>Done</button>
              ) : null}
              <button className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
 

   
    
    
    </>;
  };
  
  export default ToDoLists;