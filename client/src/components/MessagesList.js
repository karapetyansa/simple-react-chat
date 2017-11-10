import React from 'react'

export default props =>
  props.posts.map(el => (
    <div key={el.key}>
      {el.authorName}
      <p>{el.content}</p>
    </div>
  ))
