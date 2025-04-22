## Destructing

- Destructuring in React is a JavaScript feature that allows you to extract values from props or state objects and assign them to variables in a concise way. 
- This improves code readability and reduces repetition.

### Destructuring Props
When passing props to a component, you can destructure them directly in the function parameter or inside the function body:
```jsx
// Destructuring in the function parameter
const MyComponent = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

// Destructuring inside the function body
const MyComponent = (props) => {
    const { title, description } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};
```

### Destructuring State
When using React state, you can destructure the state object to access specific values:
```jsx
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            version: 16
        };
    }

    render() {
        const { name, version } = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <p>Version: {version}</p>
            </div>
        );
    }
}
```

Destructuring simplifies your code and makes it easier to work with props and state in React.