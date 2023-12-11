import React from 'react';
import './main.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
    
    return (
        <h1 className={`TodoCounter${!!loading && '--loading'}`}>
            You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOs
        </h1>
    );
  }

export { TodoCounter };
  