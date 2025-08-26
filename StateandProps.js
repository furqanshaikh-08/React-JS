import React, { Component } from 'react'

 class StateandProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cls:'Bsc(ECS)-II',
         clg:'Sangameshwar college'
      }
    }
  render() {
    const {rno,name}=this.props
    const {cls,clg}=this.state
    return (
      <div>
        <h3>Roll no : {rno}</h3>
        <p>Name : {name}</p>
        <p>Class : {cls}</p>
        <p>College : {clg}</p>
      </div>
    )
  }
}
export default StateandProps