const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.data];
    case 'toggle':
      return state.map((td) => ({
        ...td,
        done: td.id === action.id ? !td.done : td.done,
      }));
    case 'delete':
      return state.filter((td) => td.id !== action.id);
  }
};

export default todoReducer;
