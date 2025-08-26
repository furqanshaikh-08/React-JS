import React, { Component } from 'react'
import MountChild from './MountChild'

 class MyUnmountCom extends Component {
 constructor() {
   super()
   this.state = {
      ShowChild:true
   }
 }
 handleDelete=()=>
 {
    this.setState({
        ShowChild:false
    })
 }
    render() {
        const{ShowChild}=this.state
    return (
      <div>
       {ShowChild && <MountChild/>}
        <button onClick={this.handleDelete}>Delete header</button>
        
      </div>
    )
  }
}

export default MyUnmountCom