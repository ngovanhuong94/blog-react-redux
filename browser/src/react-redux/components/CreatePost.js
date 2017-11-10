import React from 'react'

export default (props) => {
  return (
  <form method="post" action="api/posts">
  <label htmlFor="title">Title</label>
  <input name="title" id="title" type="text"/>
  <br />
  <label htmlFor="introParagraph">Intro Paragraph</label>
  <input name="introParagraph" id="introParagraph" type="text"/>
  <br />
  <label htmlFor="content">Content</label>
  <input name="content" id="content" type="text"/>
  <br />
  <input type="submit"/>
  </form>
  )
}
