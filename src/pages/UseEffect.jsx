import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const StyledList = ({ children }) => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </li>
  );
};

const ulStyle = {
  paddingLeft: 0,
};

const UseEffect = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, label: 'Belanja ke Pasar', done: false },
    { id: 2, label: 'Memasak', done: false },
    { id: 3, label: 'Mengepel', done: false },
    { id: 4, label: 'Tidur Siang', done: false },
    { id: 5, label: 'Mandi Sore', done: false },
  ]);
  const [countTodo, setCountTodo] = useState(todoList.length);

  const handleToggle = (id) => {
    console.log('handle toggle', id);
    setTodoList((todo) => {
      return todo.map((td) => ({
        ...td,
        done: td.id === id ? !td.done : td.done,
      }));
    });
  };

  // akan di jalankan ketika sebuah component di load
  useEffect(() => {
    console.log('component di load');
  }, []);

  // akan di jalankan ketika sebuah component di load
  useEffect(() => {
    // update state dari countTodo sesuai jumlah data todoList
    setCountTodo(todoList.length);
  }, [todoList]);

  // akan di jalankan ketika sebuah component di load
  useEffect(() => {
    console.log(
      'akan dijalankan setiap state apapun berubah & ketika komponen di load'
    );
  });

  const handleDelete = (id) => {
    console.log('handle delete', id);
    setTodoList((todo) => todo.filter((td) => td.id !== id));
  };

  return (
    // ❌ untuk style sebaiknya konsisten
    // gunakan variable, class ataupun styled component secara konsisten
    <>
      <p>
        <b>useEffect</b> digunakan untuk menambahkan side effect ke function
        komponen.
      </p>
      <div style={{ width: '500px' }}>
        <ul style={ulStyle}>
          {todoList.map((todo) => (
            <StyledList key={todo.id}>
              <div>
                <Checkbox
                  checked={todo.done}
                  onChange={() => handleToggle(todo.id)}
                />
                {todo.label}
              </div>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </StyledList>
          ))}
        </ul>
        ❗jumlah todo di dibawah dihandle menggunakan useEffect: Jumlah Todo:{' '}
        {countTodo}
      </div>
    </>
  );
};

export default UseEffect;
