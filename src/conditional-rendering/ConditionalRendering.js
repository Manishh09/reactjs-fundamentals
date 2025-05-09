import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            isLoggedIn: false
      }
    }
    
  render() {
    // Conditional rendering is a technique in React that allows you to render different components or elements based on certain conditions.
    // It is commonly used to show or hide elements, display different content based on user authentication, or manage the visibility of components based on application state.

    // There are several ways to implement conditional rendering in React, including:
    // 1. Using if-else statements
    // 2. Using ternary operator
    // 3. Using element variables
    // 4. Using short-circuit evaluation

    //4 Using short-circuit evaluation
    return (
        this.state.isLoggedIn && (
            <div>
                <h1>Welcome back!</h1>
            </div>
        )
    )

    // 3. Using element variables
    // can use ternary or if else statement
    // let message
    // return (
    //     <div>
    //         {this.state.isLoggedIn ? message = <h1>Welcome back!</h1> : message = <h1>Please sign in</h1>}
    //         {message}
    //     </div>
    // )

    //   2. Using ternary operator
    //   return this.state.isLoggedIn ? (
    //       <div>
    //           <h1>Welcome back!</h1>
    //       </div>
    //   ) : (
    //       <div>
    //           <h1>Please sign in</h1>
    //       </div>
    //   )  

    // 4. Using if else statement
    // if(this.state.isLoggedIn) { 
    //     return (
    //         <div>
    //         <h1>Welcome back!</h1>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div>
    //         <h1>Please sign in</h1>
    //         </div>
    //     )
    // }
  }
}

export default ConditionalRendering
