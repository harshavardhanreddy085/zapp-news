import React, { Component } from 'react'
import Spin from './Spinner@1x-1.0s-200px-200px.gif'

export default class Load extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spin} alt="loading..." />
      </div>
    )
  }
}
