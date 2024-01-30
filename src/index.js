import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "/src/components/app/App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/thems/default";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
