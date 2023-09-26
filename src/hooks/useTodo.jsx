import todoReducer from '../reducer/todoReducer';
import { useReducer } from 'react';

const useTodo = () => {
  const [todoList, dispatch] = useReducer(todoReducer, [
    { id: 1, label: 'Belanja ke Pasar', done: false },
    { id: 2, label: 'Memasak', done: false },
    { id: 3, label: 'Mengepel', done: false },
    { id: 4, label: 'Tidur Siang', done: false },
    { id: 5, label: 'Mandi Sore', done: false },
  ]);

  const add = (data) => {
    dispatch({
      type: 'add',
      data: data,
    });
  };
  const del = (id) => {
    dispatch({ type: 'delete', id: id });
  };
  const toggle = (id) => {
    dispatch({ type: 'toggle', id });
  };

  return { todoList, add, del, toggle };
};

export default useTodo;
