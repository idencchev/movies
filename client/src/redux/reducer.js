const initialState = {
  isVerified: false,
  username: null,
  userId: null,
  favoriteMovies: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isVerified: true,
        username: action.payload.username,
        userId: action.payload.id,
        favoriteMovies: action.payload.favoriteMovies,
      };

    case "LOGOUT":
      return {
        ...state,
        isVerified: false,
        username: null,
        userId: null,
        favoriteMovies: [],
      };

    case "VERIFY":
      return {
        ...state,
        isVerified: true,
        username: action.payload.username,
        userId: action.payload._id,
        favoriteMovies: action.payload.favoriteMovies,
      };
    case "UPDATE_FAVORITES":
      return {
        ...state,
        isVerified: true,
        username: action.payload.username,
        userId: action.payload._id,
        favoriteMovies: action.payload.favoriteMovies,
      };
    default:
      return state;
  }
};

export const detailsReducer = (state = { movieDetails: {} }, action) => {
  switch (action.type) {
    case "DETAILS":
      return {
        ...state,
        movieDetails: action.payload,
      };

    case "REMOVE_DETAILS":
      return {
        ...state,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
};

export const movieDataReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD":
      return [...action.payload];
    case "DELETE":
      return [];

    case "ADD_FAVORITE":
      let setToFalse = state.filter((x) => {
        return x.id == action.payload;
      });

      setToFalse[0].isFavorite = false;

      return [
        ...new Map(
          [...state, ...setToFalse].map((item) => [JSON.stringify(item), item])
        ).values(),
      ];

    case "REMOVE_FAVORITE":
      let setToTrue = state.filter((x) => {
        return x.id == action.payload;
      });

      setToTrue[0].isFavorite = true;

      return [
        ...new Map(
          [...state, ...setToTrue].map((item) => [JSON.stringify(item), item])
        ).values(),
      ];
    default:
      return state;
  }
};

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "START":
      return true;
    case "STOP":
      return false;
    default:
      return state;
  }
};
