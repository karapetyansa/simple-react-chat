import React, { Component } from 'react'

const App1 = props => (
  <div className="container" style={{ maxWidth: '400px' }}>
    <h2 className="text-center">Websocket React Chat Example</h2>
    <p className="lead">
      Чат созданный в учебных целях с использованием технологий React, Node.js,
      Bootstrap, Websocket
    </p>
    <div className="sticky-top">
      <h3 className="text-info">Сергей</h3>
    </div>
    <div className="row mb-2">
      <div className="col-sm-11">
        <div className="card">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-primary">
              <small className="text-info">20:32</small> Bob
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-2 justify-content-end">
      <div className="col-sm-11">
        <div className="card">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-right text-success">
              <small className="text-info">20:35</small> Alice
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="Введите сообщение"
    />
  </div>
)

export default App1
