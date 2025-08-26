import React, { Component } from 'react'

export class EventB3 extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
       name:'Furqan'
    }
  }
ChangeName=()=>
{
     this.setState({
        name:'Arbin'
     })
}
    render() {
    return (
      <div>
        <h1>name is : {this.state.name}</h1>
        <button onClick={this.ChangeName}>Change</button>
      </div>
    )
  }
}

export default EventB3