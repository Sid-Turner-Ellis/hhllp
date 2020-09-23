const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 };
  }
};

export default reducer;
