/*This is exmaple of props destructuring*/

import React, { Component } from 'react'
export default class Class1 extends Component{
     render(){
        const {name,cs,rn}=this.props;
        return(
            <div>
                <h1>My name is {name}</h1>
                <h2>My class is {cs}</h2>
                <h3>My roll no is {rn}</h3>
            </div>
        );
     }
}