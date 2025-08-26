import React, { Component } from 'react'

export class BtnChange extends Component {
    constructor()
    {
         super();
         this.state=
         {
            name:"Furqan",
            rno:23,
            cls:'Bcs'
         }
         this.UpdateState=this.UpdateState.bind(this);
    }
    UpdateState()
    {
        <div>
          <h3>name is {this.state.name}</h3>
          <h3>roll no is {this.state.rno}</h3>
          <h3>class is {this.state.cls}</h3>
 
         </div>
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.UpdateState()}}>Details</button>
      </div>
    )
  }
}

export default BtnChange