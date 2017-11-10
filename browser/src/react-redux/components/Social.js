import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <ul>
      {
        props.social.map(link => (
          <Link to={link.route}></Link>
        ))
      }
    </ul>
  )
}
