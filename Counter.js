import React, { Component } from 'react'
const Counter=(OriginalComponent,value)=>
{
class UpdatedCom extends Component {
    constructor(props) {
      super(props);
        this.state = {
         count:0
      }
    }
    incrementCount=()=>
    {
         this.setState(prevState=>
         {
           return { count:prevState.count+value}
         }
         )
    }
  render() {
    return (
      <div>
        <OriginalComponent count={this.state.count}
         incrementCount={this.incrementCount}
         {...this.props}/>
      </div>
    )
  }
}
return UpdatedCom
}
export default Counter