import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ArticleContextProvider from "./Components/Context/ArticleContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ArticleContextProvider>
      <App />
    </ArticleContextProvider>
  </StrictMode>
);
