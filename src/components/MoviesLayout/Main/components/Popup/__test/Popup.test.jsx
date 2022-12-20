import {render} from "@testing-library/react";
import Popup from "../Popup";
import {Provider} from "react-redux";
import {store} from "../../../../../../app/store";
import {BrowserRouter} from "react-router-dom";

it('render edited popup element', () => {
    render(
            <BrowserRouter>
                <Provider store={store}>
                    <Popup isEdit={true} heading="Edit" movie={{title: 1}} />
                </Provider>
            </BrowserRouter>
    );
});

it('render adding popup element', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Popup isEdit={false} heading="Edit" movie={{title: 1}} />
            </Provider>
        </BrowserRouter>
    );
});
