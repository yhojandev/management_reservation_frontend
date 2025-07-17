import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/form.css";
import "./styles/card.css";
import "./styles/buttons.css";
import "./styles/typography.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/common.css";
import "./styles/dropdown.css";
import "./styles/badge.css";
import "./styles/table.css";
import "./styles/beadcrumb.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
