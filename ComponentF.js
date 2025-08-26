import React, { Component } from 'react'
import { ChannelConsumer, UserConsumer } from './userContext'
class ComponentF extends Component {
  render() {  
          return(
      <div>
            <UserConsumer>
        {
            fname=>
            {
                return (
          <ChannelConsumer>
            {
                lname=>
                {
                    return<div>first name {fname} last name {lname}</div>
                }
            }
          </ChannelConsumer> 
                ) 
            }  
        }
    </UserConsumer>
    </div>

    )
    
  }
}

export default ComponentF