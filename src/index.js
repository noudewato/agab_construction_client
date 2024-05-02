import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
// import { AnimatePresence } from "framer-motion";
import "./styles/index.css";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-quill/dist/quill.snow.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeToggleProvider>
        <CssBaseline />
        <Provider store={store}>
          {/* <AnimatePresence> */}
          <ToastContainer />
          <App />
          {/* </AnimatePresence> */}
        </Provider>
      </ThemeToggleProvider>
    </Router>
  </React.StrictMode>
);
