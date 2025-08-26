import React, { Component } from 'react'
import Counter from './Counter'
 class Wcounter extends Component {
  render() {
    const{count,incrementCount}=this.props
    return (
      <div>
        <h2>name : {this.props.name}</h2>
        <h3>count : {count}</h3>
        <button onClick={incrementCount}>Click</button>
      </div>
    )
  }
}

export default Counter(Wcounter,10)