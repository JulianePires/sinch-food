import { Home } from "./pages/Home";

import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/global";
import store from "./store";

export function App() {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyle />
    </Provider>
  );
}
