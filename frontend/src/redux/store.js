import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducer for the movie list
const initialState = {
  movieList: [],
  selectedMovies: {},
  movieDetail: {}
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movieList: action.payload };

    case 'SELECTED_MOVIES':
      const prevState = { ...state.selectedMovies }
      prevState[action.payload.id] = action.payload
      return { ...state, selectedMovies: prevState };

    case 'MOVIE_DETAIL':
      return { ...state, movieDetail: action.payload };
      
    default:
      return state;
  }
};

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
