import {render} from "@testing-library/react";
import CategoriesSection from "../CategoriesSection";
import {Provider} from "react-redux";
import {store} from "../../../../../../app/store";
import {BrowserRouter} from "react-router-dom";


it('render CategoriesSection correctly', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CategoriesSection/>
            </BrowserRouter>
        </Provider>
    )
});
