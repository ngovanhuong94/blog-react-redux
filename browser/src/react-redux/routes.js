import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {axios} from 'axios'
import store from './store'

//import containers

// import components
import AppConatiner from './containers/AppContainer'
// import action creators from onEnter(s)
import {retrievePosts} from './reducers/post.js'
export default  () => {
  return (
 <Provider store={store}>
 <Router history={hashHistory}>
 <Route path="/" component={AppConatiner} onEnter={retrievePosts}></Route>
 </Router>
 </Provider>
  )
}
