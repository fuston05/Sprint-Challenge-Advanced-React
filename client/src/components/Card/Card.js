import React, { Component } from 'react';

//styles
import './Card.scss';

export default class Card extends Component {
  render() {
    return (
      <div key= {this.props.player.key} className= 'playerCard'>
        <h1>{this.props.player.name}</h1>
        <p><b>Country:</b> {this.props.player.country}</p>
        <p><b>Searches:</b> {this.props.player.searches}</p>
      </div>
    )
  }
}
