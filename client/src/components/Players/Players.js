import React, { Component } from 'react'

import Card from '../Card/Card';

export default class Players extends Component {
  render() {
    return (
      <>
        {this.props.data.map( ele => {
          return <Card 
            key= {ele.id}
            player= {ele}
          />
        } )}
      </>
    )
  }
}
