import React, { Component } from 'react'

class MountChild extends Component {
  
    componentWillUnmount()
    {
         alert('The Component named as MountChild is about to be unmounted')
    }
  render() {
    return (
      <div>Welcome to MountChild</div>
    )
  }
}

export default MountChild