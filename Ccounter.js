import React, { Component } from 'react'
import Counter from './Counter'
 class Ccounter extends Component {
    render() {
        const{count,incrementCount}=this.props
        return (
            <div>            
                <h3>count : {count}</h3>
                <button onMouseOver={incrementCount}>Over</button>
            </div>
        )
    }
}

export default Counter(Ccounter,5)