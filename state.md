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



# Babel

on ```this``` it adds a new property "age" and sets it to 21

``` 
class Hello {
    age = 21;
    }
    
```

or if you set state = {age: 21} to an object
it sets ```this```


``` 
constructor(...args) {
    super(...args);
    
    __defineProperty(this, "state", {
        score: 99, 
        gameOver: false 
        });
        }
        ```
    })
}
```

## ..args is props

super(props)

defining something on an instance of a component

error: says must call super constructor in derived class before accessing 'this' 

super calls Component constructor()

after calling super: shows us that we are running the code in the Component constructor and the Game constructor

<Demo animal="bobcat" food="Pineapple" />

### ="" are the props

almost as if: ``` new Demo({animal: "Bobcat"})```

# console.log(this.props)


```console.log(this.props)```

if you want access to ```this.props``` must pass in props to super, ```super(props)```

```
render() {
    return <h1> {this.props.animal}</h1>;
    }
```

only if you need props inside the constructor do you need super(props) to pass in props


## there is no this if I'm not calling the super() constructor

changing state

never directly manipulate the state

use ``` this.setState() ``` instead

```
this.setState({ playerName: "Matt", score: 0})
```

pass in an Object

do not call this.setState() in the constructor

initialize state in the constructor but don't call this.setState in constructor

asynchronously 

components re-render when you change their state changes

1. read setState docs


