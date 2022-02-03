import { render } from "react-dom";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/reducers/Store";
import { BrowserRouter } from "react-router-dom";
render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
