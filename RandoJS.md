```
import React, { Component } from 'react'

class Rando extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 0, color: "purple" };
        {/* then call function makeTimer() */}
        this.makeTimer();
    }
    
    {/* write code to set maxNum * /}
    makeTimer() {
        setInterval (()=> {
        {/* pick a random number */}
        let rand = Math.floor( Math.random() * this.props.maxNum);
           this.setState({num: rand}) 
        },1000);
    }
    
    
    render() {
    { /* console.log("CHANGING"); */ }
        return <h1>{this.state.num} </h1>;
        
    }
}

export default Rando;
```

App.js 
```
import Rando from './Rando';

<Rando maxNum={7} />
```

we should see 0

for color: "purple" that part is not changing or re-rendering only num: 

