import React, { Component } from 'react'

class StateEx extends Component {
    constructor()
    {
         super();
         this.state=
         {
            bike:'Jawa',
            model:2025,
            price:120000,
            color:'green'
         }
    }
    UpdateState()
    {
        this.setState({
         color:'red'
        })
    }
    render() {
      return (
           
          <div>
                <h2>Bike name {this.state.bike}</h2>
                <h2>Bike model {this.state.model}</h2>
                <h2>Bike price {this.state.price}</h2>
                <h2>Bike color {this.state.color}</h2>
                <button onClick={()=>{this.UpdateState()}}>Change</button>
            </div>
    )
  }
}

export default StateEx