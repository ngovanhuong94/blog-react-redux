import React from 'react'

export default (props) => {
  return (
    <form method="post" action="api/register">
      <label for="username">Username</label>
      <input name="username" id="username" type="text"/>
      <br />
      <label for="password">password</label>
      <input name="password" id="password" type="text"/>
      <br />
      <label for="email">Email</label>
      <input name="email" id="email" type="text"/>
      <br />
      <label for="firstName">firstName</label>
      <input name="firstName" id="firstName" type="text"/>
      <br />
      <label for="lastName">LastName </label>
      <input name="lastName" id="lastName" type="text"/>
      <br />
      <input type="submit" value="Register"/>
    </form>
  )
}
