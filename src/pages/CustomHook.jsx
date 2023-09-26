import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import HighlightSyntax from '../components/HighlightSyntax/HighlightSyntax';
import useTodo from '../hooks/useTodo';

const CustomHook = () => {
  const { todoList, add, toggle, del } = useTodo();
  const inputTodo = useRef();

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <b>useReducer</b> di gunakan mengelola state pada sebuah komponen.
        <p>
          <a
            className="btn btn-primary"
            data-toggle="collapse"
            href="#benefitUseReducer"
            role="button"
            aria-expanded="false"
            aria-controls="benefitUseReducer"
          >
            Kegunaan dari UseReducer
          </a>
        </p>
        <div className="collapse" id="benefitUseReducer">
          <div className="card card-body">
            <ol>
              <li>Pengelolaan State yang Rumit</li>
              <li>Pengelolaan Logic State yang Rumit</li>
              <li>Pemisahan antara kode logic dengan presentational</li>
            </ol>
          </div>
        </div>
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
            <button
              className="btn btn-primary"
              onClick={() => {
                add({
                  id: todoList[todoList.length - 1].id + 1,
                  label: inputTodo.current.value,
                  done: false,
                });
              }}
            >
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
                        onChange={() => {
                          toggle(todo.id);
                        }}
                      />
                      <label className="form-check-label">{todo.label}</label>
                    </div>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        del(todo.id);
                      }}
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

export default CustomHook;
