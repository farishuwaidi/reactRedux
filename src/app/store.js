import { combineReducers, compose, createStore } from "redux";
import reducers from './CounterFeatures/reducers'

let rootReducer = combineReducers({
    counter: reducers,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTIONS_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers());

export default store;