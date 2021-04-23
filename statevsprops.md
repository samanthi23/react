# state vs. props

javascript objects state mutable while props not mutable 

## state stores changing component data

props stores component configuration

# state as props

stateful parent component passing down its state values to as props to stateless child components

```
class CounterParent extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 5};
 }
 
 render () {
  return (
    <div> 
      <CounterChid count = {this.state.count } />
    </div>
   );
  }
 }

```

