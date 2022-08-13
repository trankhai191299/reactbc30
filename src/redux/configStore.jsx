import {combineReducers, createStore} from 'redux'
import { numberReducer } from './reducers/numReducer';
import { imgReducer } from './reducers/imgReducer';
import { qlsvReducer } from './reducers/qlsvReducer';
import { demoGioHangReducer } from './reducers/demoGioHangReducer';
const rootReducer = combineReducers({
    number : numberReducer,
    imgCar : imgReducer,
    qlsvReducer,
    demoGioHangReducer,
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )