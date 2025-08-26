import React, { Component } from 'react'

export class EventB4 extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         color:'red'
      }
    }
ChangeColor()
{
     this.setState({
        color:'Green'
     })
}
    render() {
    return (
      <div>
        <h1>Color is : {this.state.color}</h1>
        <button onClick={()=>this.ChangeColor()}>Change</button>
      </div>
    )
  }
}

export default EventB4