const reducer = (state, action) => {
  switch (action.type) {
    case 'header':
      return { ...state, header: action.data };
  }
};

export default reducer;
