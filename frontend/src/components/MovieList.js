import { Box, Card, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetail, addSelectedMovies, fetchMovies } from '../redux/actions';
import MovieDialog from './Dialog';

function MovieList() {

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()

  const { movieList, selectedMovies, movieDetail } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchMovies())
  }, []);

  const handleClick = (movie) => {
    if (!selectedMovies[movie.id]) {
      dispatch(addSelectedMovies(movie.id))
    }else{
      dispatch(addMovieDetail(selectedMovies[movie.id]))
    }
    setOpen(true);
  }

  return (
    <Box>
      <Grid container spacing={3} p='30px' >
        {movieList.map(movie => (
          <Grid item lg={4} md={4} key={movie.id}>
            <Card onClick={() => handleClick(movie)} sx={{ textAlign: 'center', cursor: 'pointer' }} >
              <img style={{ height: 100, width: 100, marginTop: '20px' }} src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
            </Card>
          </Grid>
        ))}
      </Grid>

      <MovieDialog open={open} setOpen={setOpen} movieDetail={movieDetail} />
    </Box>
  );
}

export default MovieList;
