import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  )
}