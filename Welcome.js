import React,{Component} from "react";
export default class Welcome extends Component
{
   constructor()
   {
      super();
       this.state={
            name:"alex",
            email:"fur@123"
       }
   }
    render()
     {
         return (
         <div>
           <h1>My name {this.state.name}</h1>
           <h2>Email{this.state.email}</h2>
        </div>
         );

     }
}