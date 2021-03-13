import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
      show: true,
      nom: '',
      email: '',
      tel: ''
    }

    showAddContact = () => {
      this.setState({
        show: !this.state.show
      })
    }

    onChange = e => this.setState({
      [e.target.name]: e.target.value
    })

    onSubmit = e => {
      e.preventDefault()
    }

    render() {
        return (
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card mb-3">
                <div className="card-header">Ajouter un contact<i className="fas fa-sort-down p-3" 
                 onClick={this.showAddContact}></i></div>
                  {this.state.show ? (

                <div className="card-body">
                  <form onSumbit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrer un nom..."
                      name="nom"
                      value={this.state.nom}
                      onChange={this.onChange}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrer un email..."
                      name="nom"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="tel">Téléphone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrer un numéro de téléphone..."
                      name="nom"
                      value={this.state.tel}
                      onChange={this.onChange}
                    />
                    </div>

                    <input 
                      type="submit"
                      value="Ajouter un contact"
                      className="btn btn-block btn-primary"
                    />
                  </form>
                </div>
                    ) : null}
              </div>
            </div>
          </div>
        )
    }
}
