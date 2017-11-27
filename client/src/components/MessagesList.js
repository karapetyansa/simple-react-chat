import React from 'react'

const messageToList = myName => el => (
  <div
    className={
      myName === el.authorName ? 'row mb-2' : 'row mb-2 justify-content-end'
    }
    key={el.key}
  >
    <div className="col-sm-11">
      <div className="card">
        <div className="card-body">
          <h6
            className={
              myName === el.authorName
                ? 'card-subtitle mb-2 text-primary'
                : 'card-subtitle mb-2 text-right text-success'
            }
          >
            <small className="text-info">{el.time + ' '}</small>
            {el.authorName}
          </h6>
          <p className="card-text">{el.content}</p>
        </div>
      </div>
    </div>
  </div>
)

export default props => props.posts.map(messageToList(props.myName))
