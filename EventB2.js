import React, { Component } from 'react'

export class EventB2 extends Component {
  
   constructor(props) {
     super(props)
     this.state = {
        count:10
     }
   }  
   incrementCount()
   {
     this.setState({
        count:20
     })
   }
    render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.incrementCount.bind(this)}>Increase</button>
      </div>
    )
  }
}

export default EventB2