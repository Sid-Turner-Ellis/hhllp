const reducer = (state, action) => {
  switch (action.type) {
    case 'updatePageData':
      return { ...state, pageData: action.data };
  }
};

export default reducer;
