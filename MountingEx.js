import React, { Component } from 'react'


 class MountingEx extends Component {

  constructor(props) {
    super(props)
    this.state={
        name:'Alex'
    }
    console.log('LifecycleA Constructor')
}
static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
}
componentDidMount() {
    console.log('LifecylceA componentDidMount')
}
shouldComponentUpdate()
{
    console.log('LifecycleA shouldComponentUpdate')
    return true
}
getSnapshotBeforeUpdate(prevState,prevProps)
{
    console.log('LifecylceA getSnapshotBeforeUpdate');
    return null;
}
componentDidUpdate()
{
    console.log('LifecycleA componentDidUpdate')
}
changeState=()=>
{
     this.setState({
        name:'Rocky'
     })
}

render() {
    console.log('LifecylceA Render')
    return(
        <div>
            <p>name is:{this.state.name}</p>
           LifecycleA
           
        <button onClick={this.changeState}>Change</button>
       
        </div>
    )
}
}

export default MountingEx