import {render} from "@testing-library/react";
import CategoriesBar from "../CategoriesBar";
import {Provider} from "react-redux";
import {store} from "../../../../../../app/store";
import {BrowserRouter} from "react-router-dom";


it('render CategoriesBar correctly', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CategoriesBar/>
            </BrowserRouter>
        </Provider>
    )
});
