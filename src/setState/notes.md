## setState

- lets react know about re-rendering of the component
- state object should be changed using setState
- Calls to setState are asynchronous
- A callback function can be of use, incase of any logic needs be checked only after the state has been updated

**Syntax:**

```javascript
    class Counter extends Component
    constructor() {
        // state object can be accessed here and can be assigned with initial value, using this.state
        this.state = {
            count: 0 // initial value
        }
    }

    // changing stat object
    increment() {
        this.setState(
            {
                this.state = this.count + 1; // state object
            },
            () => {
                console.log(this.state.count); // callback function
            }
        )
    }

    //When state needs to be updated  using prevState, pass a function as a parameter to the `setState`
    this.setState((prevState) => {
        this.state = prevState.count + 1;
    })
```
