const reducer = (state, action) => {
  switch (action.type) {
    case 'updatePageData':
      return { ...state, pageData: action.data };

    case 'revertModal':
      return { ...state, modalVisible: !state.modalVisible }
  }

};

export default reducer;
