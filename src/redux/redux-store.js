import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./mainpage-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    mainPage: mainPageReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store