import React from 'react'

export default (props) => {
  return (
  <form method="post" action="api/posts">
    <label for="title">Title</label>
    <input id="title" name="title" type="text"/>
    <br />
    <label for="intoParagraph">Into-Paragraph</label>
    <input id="intoParagraph" name="intoParagraph" type="text"/>
    <br />
    <label for="content">Content</label>
    <textarea id="content" name="content" type="text"></textarea>
    <br />
    <input type="submit"/>
  </form>
  )
}
