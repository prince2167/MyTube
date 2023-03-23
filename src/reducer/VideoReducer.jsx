const initialState = {
  isMenuOpen: true,
  videos: [],
  error: "",
  isLoading: false,
};

const videoReducer = (state, action) => {
  switch (action.type) {
    case "MENU_OPEN": {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    }

    case "FETCH_START": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "FETCH_SUCESSFUL": {
      return {
        ...state,
        videos: [action.payload],
        isLoading: false,
      };
    }
    case "FETCH_FAILED": {
      return {
        ...state,
        videos: [],
        error: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { initialState, videoReducer };
