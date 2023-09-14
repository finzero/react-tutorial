import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

// styling untuk element li
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

// style variable untuk element ul
const ulStyle = {
  paddingLeft: 0,
};

const UseState = () => {
  // buat state untuk todoList
  const [todoList, setTodoList] = useState([
    { id: 1, label: 'Belanja ke Pasar', done: false },
    { id: 2, label: 'Memasak', done: false },
    { id: 3, label: 'Mengepel', done: false },
    { id: 4, label: 'Tidur Siang', done: false },
    { id: 5, label: 'Mandi Sore', done: false },
  ]);

  // function untuk handle check / uncheck
  const handleToggle = (id) => {
    console.log('handle toggle', id);
    setTodoList((todo) => {
      return todo.map((td) => ({
        ...td,
        done: td.id === id ? !td.done : td.done,
      }));
    });
  };

  // function untuk handle delete todoList
  const handleDelete = (id) => {
    console.log('handle delete', id);
    setTodoList((todo) => todo.filter((td) => td.id !== id));
  };

  return (
    // ❌ untuk style sebaiknya konsisten,
    // tidak dicampur antara styledComponent, style variable atau inline
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
    </div>
  );
};

export default UseState;
