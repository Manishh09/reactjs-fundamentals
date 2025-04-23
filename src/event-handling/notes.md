## Event Handling

- event handler should be a function but not a function call

Function:
```html
<button onClick="{clickHandler}">Click Me</button>
```

Function Call:
```html
<button onClick="{clickHandler()}">Click Me</button>
```