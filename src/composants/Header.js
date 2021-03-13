import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-primary mb-2 py-0">
              <div className="container">
                <a href="/" className="navbar-brand">AppContacts</a>
                <ul className="navbar-nav">
                  <li className="nav-item ml-auto">
                    <a href="/" className="nav-link">Accueil</a>
                  </li> 
                </ul>
              </div>
            </div>
        )
    }
}
