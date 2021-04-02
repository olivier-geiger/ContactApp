import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from './context'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Header from './composants/interface/Header'
import Liste from './composants/contact/Liste'
import AddContact from './composants/contact/AddContact'
import APropos from './composants/pages/APropos'
import Erreur from './composants/pages/Erreur'


class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
              <div className="container">
                <switch>
                  <Route exact path="/ajoute" component={AddContact} />
                  <Route exact path="/liste" component={Liste} />
                  <Route exact path="/" component={Liste} />
                  <Route exact path="/apropos" component={APropos} />
                
                </switch>
              </div>
          </div>
        </Router>
        <ToastContainer />
      </Provider>
    );
  }
}

export default App;  