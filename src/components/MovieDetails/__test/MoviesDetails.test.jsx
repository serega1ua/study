import {render} from "@testing-library/react";
import MovieDetails from "../MovieDetails";
import {Provider} from "react-redux";
import {store} from "../../../app/store";
import {BrowserRouter} from "react-router-dom";


it('render MoviesDetails correctly', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <MovieDetails/>
            </BrowserRouter>
        </Provider>
    )
});
