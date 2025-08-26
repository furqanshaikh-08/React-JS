import React, { Component } from 'react'
class EventBind extends Component
{
     constructor()
     {
         super();
         this.state={
            msg:"hello Furqan"
         }
     }
     clickHandler()
     {
         this.setState({
            msg:"hello Adi"
         })
     }
     render()
     {
         return(
            <div>
                <h3>{this.state.msg}</h3>
                <button onClick={this.clickHandler.bind(this)}>Click Me!!</button>
            </div>
         );
     }
}
export default EventBind