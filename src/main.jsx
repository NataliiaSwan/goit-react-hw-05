import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Знайдіть кореневий елемент вашого додатку
const container = document.getElementById("root");

// Створіть корінь і рендеріть додаток
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
