import { combineReducers, createStore } from "redux";
import ProductReducer from "../Reducer/ProductReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import CartReducer from "../Reducer/CartReducer";
const root = combineReducers({
    
    ProductReducer,
    CartReducer,

})

const store = createStore(root,devToolsEnhancer())
export default store;