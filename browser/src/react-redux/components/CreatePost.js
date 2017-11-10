import React from 'react'

export default (props) => {
  return (
  <form method="post" action="api/posts">
  <label for="title">Title</label>
  <input name="title" id="title" type="text"/>
  <br />
  <label for="introParagraph">Intro Paragraph</label>
  <input name="introParagraph" id="introParagraph" type="text"/>
  <br />
  <label for="content">Content</label>
  <input name="content" id="content" type="text"/>
  <br />
  <input type="submit"/>
  </form>
  )
}
