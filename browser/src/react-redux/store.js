import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/root-reducer'

import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export default createStore(
  rootReducer,
  composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    createLogger({collapsed: true})
  )
  )
)
