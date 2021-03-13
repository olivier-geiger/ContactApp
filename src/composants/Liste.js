import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

export default class Liste extends Component {

  delete = (id) => {
    const newContacts = this.state.contacts.filter(contact => 
      contact.id !== id)

      this.setState({
        contacts: newContacts
      })
  }
  
  render() {

    return (
      <Consumer>
        {value =>{
          return(
            <React.Fragment>
            {value.contacts.map(contact => (
              <Contact 
              key={contact.key}
              nom={contact.nom}
              email={contact.email}
              tel={contact.tel}
              deleteClick={() => this.delete(contact.id)}
              />
            ))}
        </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}
