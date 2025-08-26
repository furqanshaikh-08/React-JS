import React, { Component } from 'react'

export class EventB1 extends Component {
 
     constructor(props) {
       super(props)
       this.state = {
        msg:'Hello Everyone'
    }
    this.ClickHandler=this.ClickHandler.bind(this)
}
ClickHandler()
{
     this.setState({
        msg:'Good Bye Everyone'}
     )
}   
render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={this.ClickHandler}>Change</button>
      </div>
    )
  }
}
export default EventB1