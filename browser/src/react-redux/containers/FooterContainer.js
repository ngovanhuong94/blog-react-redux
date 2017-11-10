import React from 'react'
import {connect} from 'react-redux'

import Social from '../components/Social'
import Navigation from '../components/Navigation'

export default class FooterContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
       <Social />
       <Navigation />
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return {
//
//   }
// }
//
// function mapDispatchToProps (dispatch) {
//   return {
//
//   }
// }
//
// connect (mapStateToProps, mapDispatchToProps) (FooterContainer)
