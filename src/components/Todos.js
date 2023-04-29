/*import { useDispatch, useReducer } from 'react-redux';
import { UseReducer } from '../reducers/UseReducer';
import { UseReducerAction } from '../actions/UseReducerAction';

export function Todos() {
  const [todos, dispatch] = useReducer(useReducer);

  const handleComplete = (todo) => {
    dispatch(UseReducerAction);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}*/