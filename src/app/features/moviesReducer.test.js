import moviesReducer, {fetchMovies, setIsSelected} from "./moviesReducer";
import {setMovies} from "./moviesReducer";

it('correct work of setMovies reducer', () => {
    expect(moviesReducer({}, setMovies([{title: "Film", id: 1}]))).toMatchSnapshot();
});

it('correct work of setIsSelected reducer', () => {
    expect(moviesReducer({}, setIsSelected(true))).toMatchSnapshot();
});


