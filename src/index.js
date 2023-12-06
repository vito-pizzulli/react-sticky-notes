import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import '../src/style.scss';

const root = createRoot(document.getElementById("root"));
root.render(<App />);