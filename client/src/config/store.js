
import {createStore,compose,combineReducers} from "redux"
import dataService from '../services/data-service'
import orderReducer from '../reducers/OrderReducer.js'
import orderListReducer from '../reducers/OrderListReducer.js'


const rootReducer = combineReducers({
  order:orderReducer,
  orderList:orderListReducer
})

const store = createStore(rootReducer)

export default store