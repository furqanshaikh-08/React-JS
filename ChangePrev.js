import React, { Component } from 'react'

class ChangePrev extends Component {
    constructor()
    {
         super();
         this.state={count:0 }
         this.IncrementState=this.IncrementState.bind(this);
    }
    IncrementState()
    {
        this.setState((prevState)=>{return{
            count:prevState.count+1};
        });
    }
    render() {
    return (
        <div>
        <p>Incrementing count by {this.state.count}</p>
        <button onClick={this.IncrementState}>Click me</button>
        </div>
    )
  }
}

export default ChangePrev