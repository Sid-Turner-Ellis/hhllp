const reducer = (state, action) => {
  switch (action.type) {
    case 'header':
      return { ...state, header: action.data };
    case 'landing':
      return { ...state, landing: action.data };
  }
};

export default reducer;
