import "./App.css";
import { Provider } from "react-redux";
import React from "react";
import MainPageContainer from "./components/mainPage/MainPageContainer";
import store from "./redux/redux-store";

function App() {
  return (
    <Provider store={store}>
      <MainPageContainer />
    </Provider>
  );
}

export default App;
