import MovieList from './components/MovieList';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store} >
      <MovieList />
    </Provider>
  );
}

export default App;
