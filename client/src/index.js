import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./components/App";
import reducers from "./reducers";

const store = configureStore({ reducer: reducers });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="1032126256402-raltcefut3i88eko7n858sgo25hhpl9n.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
