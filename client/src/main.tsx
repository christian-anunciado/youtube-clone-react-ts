import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Loading from "./components/Loading/Loading";
import "./index.css";
import { persistor, store } from "./redux/store";
import MenuProvider from "./context/menuContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </MenuProvider>
  </React.StrictMode>
);
