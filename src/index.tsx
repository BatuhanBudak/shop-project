import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ContextProvider } from "./Context";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
  <ContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ContextProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
