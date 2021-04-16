# React Events

user clicks, submits a form, drag or drop

takes callback functions as event

**onClick**

in render() return

```
<button onClick={function() {alert('CLICKED');}}>Click me!</button>

```

after constructor and before render() setState

```
handleClick(e) {
    this.setState({clicked: true})
}
```
in render() { after return () in <div>

```
<button onClick={this.handleClick}> Click Me! </button>
```

setting state inside constructor is not allowed


## must use this.handleClick

not this.handleClick() is invoked immediately pass in as a callback this.handleClick

call it on our instance 

so method is not called "out of context" or undefined

```
constructor(props) {
super(props);
this.state = { clicked: false };
this.handleClick = this.handleClick.bind(this);
```

## bind(this)

in constructor is individual component

<Click />

setting state on the correct component, one component

to guarantee the value of this
 
## other places to put .bind(this)

can also bind it directly in the render

```
<button onClick = {this.handleClick.bind(this)}> Click Me </button>
```

much nicer in constructor bind(this), neatly displayed as a header

arrow function binds this also

React docs


