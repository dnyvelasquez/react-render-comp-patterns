import React from "react";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { useTodos } from "./useTodos";
import { ChangeAlert } from "../ChangeAlert";
import "./main.css";

function App() {
  const {
    states,
    stateUpdaters,
  } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completeTodo,
    completedTodos,
    openModal,
    searchValue,
  } = states;

  const {
    setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <div className="global-container">
      <div className="app-container">
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchValue={searchValue}
          totalTodos={totalTodos}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchValue) => <p>Not found {searchValue}</p>}
        >
          {(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} />
        <ChangeAlert sincronize={sincronizeTodos} />
      </div>
    </div>
  );
}

export default App;
