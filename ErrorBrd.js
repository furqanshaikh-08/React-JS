import React, { Component } from 'react'

export class ErrorBrd extends Component {
  constructor(props)
  {
     super(props);
     this.state={
         hasError:false
     }
  }
  static getDerivedStateFromError(error)
  {
    return{
        hasError:true
    }
  }
    render() {
    if(this.state.hasError)
    {
        return <h1><b>Something Went wrong</b></h1>
        }
      return this.props.children;  
  }
  componentDidCatch(error,info)
  {
    console.log(error);
    console.log(info);
  }
}
export default ErrorBrd