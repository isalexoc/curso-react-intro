import React from 'react';
import './todoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
      totalTodos,
      completedTodos,
    } = React.useContext(TodoContext);

    return(
      <h2>
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    );
  }

  export {TodoCounter};