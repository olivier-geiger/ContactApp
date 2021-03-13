import React, { Component } from 'react'

export default class Contact extends Component {

  state = {
    show: true
  }

  showContact = () => {
    this.setState({
      show: !this.state.show
    })
  }

  deleteContact = () => {
    this.props.deleteClick()
  }

  render() {
    return (
      <div class="row">
        <div className="col-md-6 m-auto">
          <div className="card card-body mb-3">

            <h4 className=" text-center">
              {this.props.nom} <i className="fas fa-sort-down" 
              onClick={this.showContact}></i>

              <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}
              onClick={this.deleteContact}></i>
            </h4>

            {this.state.show ? (
              <ul className="card card-body mb-2">
                <li className="list-group-item">
                  Email : {this.props.email}
                </li>
                <li className="list-group-item">
                  Téléphone : {this.props.tel}
                </li>
              </ul>
            ) : null}

          </div>
        </div>
      </div>
    )
  }
}
