import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "ui/globalStyles";

import { router } from "./routes/router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <GlobalStyles />
  </>
);
