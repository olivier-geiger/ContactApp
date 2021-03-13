import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
  state = {
      contacts : [
        {
          id: 1,
          nom: 'Olivier Geiger',
          email: 'contact@oliviergeiger.com',
          tel: 'O6 10 84 31 21'
        },
        {
          id: 2,
          nom: 'Jean Martin',
          email: 'contact@jeanmartin.com',
          tel: 'O6 23 45 67 78'
        },
        {
          id: 3,
          nom: 'Marie dupont',
          email: 'contact@mariedupond.com',
          tel: 'O1 23 45 67 89'
        }
      ]
    }
    
  render() {
      return (
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      );
  }
}

export const Consumer = Context.Consumer;