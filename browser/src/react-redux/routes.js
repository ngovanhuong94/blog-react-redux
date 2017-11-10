import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {axios} from 'axios'
import store from './store'

//import containers

// import components
import AppConatiner from './containers/AppContainer'
export default  () => {
  return (
 <Provider store={store}>
 <Router history={hashHistory}>
 <Route path="/" component={AppConatiner}></Route>
 </Router>
 </Provider>
  )
}
