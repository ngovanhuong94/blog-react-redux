import React from 'react'

export default (props) => {
  return (
    <form method="post" action="api/register">
      <label htmlFor="username">Username</label>
      <input name="username" id="username" type="text"/>
      <br />
      <label htmlFor="password">password</label>
      <input name="password" id="password" type="text"/>
      <br />
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="text"/>
      <br />
      <label htmlFor="firstName">firstName</label>
      <input name="firstName" id="firstName" type="text"/>
      <br />
      <label htmlFor="lastName">LastName </label>
      <input name="lastName" id="lastName" type="text"/>
      <br />
      <input type="submit" value="Register"/>
    </form>
  )
}
