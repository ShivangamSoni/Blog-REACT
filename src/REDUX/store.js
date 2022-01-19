import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunkMiddleware from "redux-thunk";
import BlogsReducer from "./Blogs/Reducer";
import SiteReducer from "./Site/Reducer";

const rootReducer = combineReducers({ blogs: BlogsReducer, site: SiteReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunkMiddleware)));

export default store;

// export default createStore(rootReducer, applyMiddleware(ReduxThunkMiddleware));
