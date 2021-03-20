# State

to make CRUD operations

use events to trigger state changes

1. open or close
2. expanded or collapsed read more button

# in a chess game

think Data Structures at Harvard

UI logic

email box, read unread text colors

# props

data passed to a component

# state

internal data specific to a component

does change over time ( unlike a prop )

always an Object 

instance attribute on a component

keys / values

# can console.log(this.state)

```
{ playerName: "Whiskey", 
score: 100
}
```

# constructor

```
constructor(props) {
    
    super(props);
    this.state = {
    
};

}
```

# render

```
render() 
    return (
        <div>
            <p> Current Player: { this.state.palyer}
            </p>
        </div>
    );
}
}
```

must set initial state in REACT
)


```