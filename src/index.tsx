import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/styles";
import App from "./App/App";
import theme from "./Theme/Theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppData } from "./App/AppData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppData>
          <App />
        </AppData>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
