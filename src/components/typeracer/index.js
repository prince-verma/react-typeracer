import React from 'react';
import Base from './base';
import "../css/base.css"

export default class Login extends Base {
  render() {
    return (
      <div className="container">
        {this.state.text}
      </div>
    )
  }
}