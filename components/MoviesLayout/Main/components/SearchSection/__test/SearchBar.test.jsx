import {render, fireEvent, screen} from "@testing-library/react";
import SearchBar from "../SearchBar";
import {Provider} from "react-redux";
import {store} from "../../../../../../app/store";
import {BrowserRouter} from "react-router-dom";
import {useState} from "react";


it('render SearchBar component', () => {
        const Wrapper = ({children}) => {
            return (
                <BrowserRouter>
                    <Provider store={store}>
                        {children}
                    </Provider>
                </BrowserRouter>

            )
        }
        render(
            <Wrapper>
                <SearchBar placeholder={"What do you want to watch?"} searchQueryVal={""} onChangeFun={(e) => e.target.value} />
            </Wrapper>
        ) ;
    })
