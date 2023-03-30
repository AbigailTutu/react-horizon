import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
    <div className="col-md-3 col-sm-6">
        <div className="card" style={{width: "18rem;"}}>
           <img src={this.props.imgSrc} className="card-img-top" alt="..."/>
          <div className="card-body">
             <p className="card-text">{this.props.description}</p>
          </div>
        </div>
    </div>
    )
  }
}
