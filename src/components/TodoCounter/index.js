import React from 'react';
import './main.css';

function TodoCounter({ totalTodos, completedTodos }) {
    
    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
        </h1>
    );
  }

export { TodoCounter };
  