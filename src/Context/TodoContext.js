import React from "react";

export const TodoContext = React.createContext({
  todos: [
    {
      id: 1,
      todo: "msg",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return React.useContext(TodoContext);
};
// import React from "react";

// export const TodoContext = React.createContext({
//   todos: [
//     {
//       id: 1,
//       todo: "msg",
//       completed: false,
//     },
//   ],

//   addTodo: (todo) => {},
//   updateTodo: (id, todo) => {},
//   deleteTodo: (id) => {},
//   toggleComplete: (id) => {},
// });

// export const useTodo = () => {
//   return React.useContext(TodoContext);
// };