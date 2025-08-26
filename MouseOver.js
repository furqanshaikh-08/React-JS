import React, { Component } from 'react'
import WithCounter from './myfile/WithCounter';
export class MouseOver extends Component {
  render() {
      const {count,incrementCounter}=this.props;
      return <h2 onMouseOver={incrementCounter}>Mouse</h2>
  }
}
export default WithCounter(MouseOver);