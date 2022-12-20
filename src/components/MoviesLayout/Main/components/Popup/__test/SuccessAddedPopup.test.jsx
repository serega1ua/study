import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../../../../../app/store";
import {BrowserRouter} from "react-router-dom";
import SuccessAddedPopup from "../SuccessAddedPopup";

it('render success popup element', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <SuccessAddedPopup/>
            </Provider>
        </BrowserRouter>
    );
});
