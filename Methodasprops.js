import React, { Component } from 'react'
import MethodChild from './MethodChild';

export class Methodasprops extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       Parent:'Arbin'
    }
    this.HelloDisplay=this.HelloDisplay.bind(this)
  }
  HelloDisplay(childValue)
  {
     alert(`Hello ${this.state.Parent} from ${childValue}`);
  }
     render() {
    return (
      <div>
        <MethodChild Display={this.HelloDisplay}/>
      </div>
    )
  }
}

export default Methodasprops