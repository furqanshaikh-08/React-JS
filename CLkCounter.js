import React, { Component } from 'react'
import WithCounter from './WithCounter';
export class CLkCounter extends Component {
  render() {
    const{count,incrementCounter}=this.props;
    return <button onClick={incrementCounter}>Clicked {count} times</button>
  }
}
export default WithCounter(CLkCounter);