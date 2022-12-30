import '../styles/globals.css';
import MainContextWrapper from "../context/MainContext";
import {Provider} from "react-redux";
import {store} from "../app/store";

export default function App({ Component, pageProps }) {
  return (
      <MainContextWrapper>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </MainContextWrapper>
  )
}
