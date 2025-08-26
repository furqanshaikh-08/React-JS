import React from "react";

export default function Hello() {

     let age=parseInt(prompt("Enter your age"));
     return (
     
          <div>    
           { age>=18 ? (
                  alert("you are in")
           ):(
               alert("Your are not allowed")
           )}
           age.preventDefault();
          </div>
     );
}
