import React, { Component } from 'react'
class Update extends Component
{
    constructor()
    {
         super()
         this.state={
           count:0
         }
         this.updateState=this.updateState.bind(this);
    }
    updateState()
    {
         this.setState((prevState)=> {
            return {count:prevState.count+1};
         })
    }
    render(){
        return(
            <div>
                <h2>Click Counter</h2>
                <p>You have clicked me {this.state.count}times</p>
                <button onClick={this.updateState}>Click me!</button>
            </div>
        )
    }
}

export default Update