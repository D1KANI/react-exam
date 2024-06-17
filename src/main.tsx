import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App.tsx";

import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "@/configs/mantine";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={mantineTheme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
