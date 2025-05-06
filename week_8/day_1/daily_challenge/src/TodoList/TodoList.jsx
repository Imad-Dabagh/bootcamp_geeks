import React, { useReducer, useRef, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
                ...state,
                todos: [
                  ...state.todos,
                  { id: Date.now(), text: action.payload, completed: false },
                ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.newText }
            : todo
        ),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

function TodoList() {

  const initialState = {
    todos: [],
    filter: "all",
  };


  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [editInputId, setEditInputId] = useState(null);
  const editInputRef = useRef(null)

  const handleAddTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleEditTodo = (id) => {
    const newText = editInputRef.current.value;
    dispatch({ type: "EDIT_TODO", payload: { id: id, newText } });
    setEditInputId(null);
    editInputRef.current.value = '';
  }

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const showEditInput = (id) => {
    setEditInputId(id);
  }

  return (
    <div>
      <ul>
        {state.todos
          .filter((todo) => {
            if (state.filter === "completed") return todo.completed;
            if (state.filter === "active") return !todo.completed;
            return true;
          })
          .map((todo) => (

            <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {editInputId === todo.id ? 
              <>
                <input ref={editInputRef} defaultValue={todo.text} />
                <button onClick={() => handleEditTodo(todo.id, editInputRef)} >Save</button>
              </>
              : 
              ( <>
                  {todo.text}
                  <button onClick={() => showEditInput(todo.id, todo.text)}>Edit</button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </>
              ) 
            }
          </li>
        )
        
        )}
      </ul>
      <div>
        <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "all" })}>All</button>
        <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "completed" })}>Completed</button>
        <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "active" })}>Active</button>

      </div>
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}

export default TodoList;