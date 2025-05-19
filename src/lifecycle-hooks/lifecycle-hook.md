## React Component Life Cycle Hooks in v16.4 or above

1. Only available for Class Components but does not for Functional Components.
2. Lifecycle hooks are organized into 4 phases:

    ### 1. Mounting Phase
    Triggers When a component is created and inserted to DOM

    - `constructor()` - Initialize state and bind methods
    - `static getDerivedStateFromProps()` - Return new state based on props
    - `render()` - Required method to return React elements
    - `componentDidMount()` - Run after component is mounted to DOM

    ### 2. Updating Phase
    Triggers When a component is being re-rendered bcoz of props or state

    - `static getDerivedStateFromProps()` - Same as in mounting
    - `shouldComponentUpdate()` - Control if component should re-render
    - `render()` - Re-render with new props/state
    - `getSnapshotBeforeUpdate()` - Capture information before DOM updates
    - `componentDidUpdate()` - Run after updates are committed to DOM

    ### 3. Unmounting Phase
    Triggers When a component is being removed from DOM

    - `componentWillUnmount()` - Clean up before component is destroyed

    ### 4. Error Handling
    Triggers When there is an error during rendering / in a lifecycle method / in constructor of any child component

    - `static getDerivedStateFromError()` - Render fallback UI after error
    - `componentDidCatch()` - Log error information

3. Legacy methods (deprecated in v16):
    - `componentWillMount()`
    - `componentWillReceiveProps()`
    - `componentWillUpdate()`
