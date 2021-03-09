import './App.css';
import MainPageContainer from "./components/mainPage/MainPageContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import React from "react";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <MainPageContainer/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
