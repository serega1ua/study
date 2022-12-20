import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../../../../../app/store";
import {BrowserRouter} from "react-router-dom";
import DeletePopup from "../DeletePopup";

it('render deleting popup element', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <DeletePopup movieId={20056} />
            </Provider>
        </BrowserRouter>
    );
});
