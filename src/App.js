import './App.css';
import MainPageContainer from "./components/mainPage/MainPageContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import React from "react";

function App() {
    return (
        <Provider store={store}>
            <MainPageContainer/>
        </Provider>
    );
}

export default App;
