import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoTitle } from '../TodoTitle';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);

    return (
        <>
    
          <TodoTitle />
          <TodoCounter />
          <TodoSearch />
    
          
              
                <TodoList>
                {loading && (
                    <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                    </>
                    )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <TodosEmpty />}
    
                {searchedTodos.map(todo => (
                   <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed}
                      onComplete={() => completeTodo (todo.text)}
                      onDelete={() => deleteTodo (todo.text)}
                   />
                )
               )}
        
                  </TodoList>
              
          
    
          <CreateTodoButton />

          {openModal && (
            <Modal>
              Texto de prueba
            </Modal>
          )}
    
        </>
      );
}

export {AppUI};