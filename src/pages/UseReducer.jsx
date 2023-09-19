import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import HighlightSyntax from '../components/HighlightSyntax/HighlightSyntax';

const UseReducer = () => {
  const inputTodo = useRef();

  // buat state untuk todoList
  const [todoList, setTodoList] = useState([
    { id: 1, label: 'Belanja ke Pasar', done: false },
    { id: 2, label: 'Memasak', done: false },
    { id: 3, label: 'Mengepel', done: false },
    { id: 4, label: 'Tidur Siang', done: false },
    { id: 5, label: 'Mandi Sore', done: false },
  ]);

  // function to handle add new todo
  const handleAdd = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList[todoList.length - 1].id + 1,
        label: inputTodo.current.value,
      },
    ]);
    // Clear Value and focus on input
    inputTodo.current.value = '';
    inputTodo.focus();
  };

  // function untuk handle check / uncheck
  const handleToggle = (id) => {
    setTodoList((todo) => {
      return todo.map((td) => ({
        ...td,
        done: td.id === id ? !td.done : td.done,
      }));
    });
  };

  // function untuk handle delete todoList
  const handleDelete = (id) => {
    setTodoList((todo) => todo.filter((td) => td.id !== id));
  };

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <b>useReducer</b> di gunakan mengelola state pada sebuah komponen.
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-inline">
            <input
              ref={inputTodo}
              type="text"
              name="todo"
              className="form-control"
              id=""
              placeholder="Todo Baru"
            />
            <button className="btn btn-primary" onClick={handleAdd}>
              Tambah
            </button>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>To Do List</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((todo) => (
                <tr key={todo.id}>
                  <td>
                    <div className="form-group form-check mb-0">
                      <input
                        type="checkbox"
                        name="todo"
                        className="form-check-input"
                        onChange={() => handleToggle(todo.id)}
                      />
                      <label className="form-check-label">{todo.label}</label>
                    </div>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(todo.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <HighlightSyntax lang={'javascript'}>
            {JSON.stringify(todoList)}
          </HighlightSyntax>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
