import axios from "axios";

export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:7000/list')
            dispatch({ type: 'SET_MOVIES', payload: data });
        } catch (e) {
            console.log(e)
        }
    };
};

export const addSelectedMovies = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:7000/details/${id}`)
            dispatch({ type: 'SELECTED_MOVIES', payload: data });
            dispatch({ type: 'MOVIE_DETAIL', payload: data });
        } catch (e) {
            console.log(e)
        }
    };
};

export const addMovieDetail = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'MOVIE_DETAIL', payload: data });
        } catch (e) {
            console.log(e)
        }
    };
};