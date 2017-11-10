import React from 'react'

export default (props) => {
  return (
    <form method="post" action="api/login">
     <label htmlFor="username">Username: </label>
     <input id="username" name="username" type="text"/>
     <br />
     <label htmlFor="password">Password: </label>
     <input id="password" name="password" type="password"/>
     <br />
     <input type="submit" value="Login"/>
    </form>
  )
}
