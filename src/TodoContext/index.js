import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
    
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;  
      const totalTodos = todos.length;
    
    //EFECTOS EJEMPLO
      /* console.log('Log 1');
    
      React.useEffect(() => {
        console.log('Looooooooooog 2');
      });
    
      React.useEffect(() => {
        console.log('Looooooooog 2');
      }, []);
    
      React.useEffect(() => {
        console.log('Looooooooog 2');
      }, [totalTodos]);
    
      console.log('Log 3'); */
    
      const searchedTodos = todos.filter(
        (todo) => {
          const textTodo = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return textTodo.includes(searchText);
        }
      );

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

// <TodoContext.Provider></TodoContext.Provider>
// <TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider };