import { createStore, combineReducers } from "redux";
import sinhVienReducer from "./reducers/sinhVienReducer";

const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    sinhVienReducer: sinhVienReducer,
  });
  
  export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );