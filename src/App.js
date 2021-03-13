import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/Header'
import Liste from './composants/Liste'
import AddContact from './composants/AddContact'
import { Provider } from './context'
import {BrowserRouter as Router, Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Provider>
      <div>
        <Header />
        <div className="container">
          <AddContact />
          <Liste />
        </div>
      </div>
      </Provider>
    )
  }
}

