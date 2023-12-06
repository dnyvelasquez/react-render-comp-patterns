import React from 'react';
import './main.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}

      {props.searchedTodos.map(renderFunc)}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };