import React from 'react';
import './main.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
    
    return (
        <h1 className={`TodoCounter${!!loading && '--loading'}`}>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
        </h1>
    );
  }

export { TodoCounter };
  