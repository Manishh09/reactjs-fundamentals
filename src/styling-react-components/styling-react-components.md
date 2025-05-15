# Styling React Components (v16)

## 1. Inline Styling

Inline styling uses JavaScript objects directly in the `style` prop.

```jsx
function Button() {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    };
    
    return <button style={buttonStyle}>Click Me</button>;
}
```

**Pros:**
- No external files needed
- Dynamic styling is straightforward
- JavaScript variables can be used directly
- No class name conflicts

**Cons:**
- No CSS reuse
- No access to pseudo-classes like `:hover`
- No media queries
- Can make components verbose

## 2. External CSS

Traditional CSS files imported into components.

```css
/* styles.css */
.btn {
    background-color: blue;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
}

.btn:hover {
    background-color: darkblue;
}
```

```jsx
// Button.jsx
import './styles.css';

function Button() {
    return <button className="btn">Click Me</button>;
}
```

**Pros:**
- Full CSS feature access
- Separation of concerns
- Familiar syntax
- Can use preprocessors (SASS/LESS)

**Cons:**
- Global namespace (potential conflicts)
- No scoping to components
- Less control for dynamic styling

## 3. CSS Modules

Component-scoped CSS files with local class names by default.

```css
/* Button.module.css */
.btn {
    background-color: blue;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
}

.btn:hover {
    background-color: darkblue;
}
```

```jsx
// Button.jsx
import styles from './Button.module.css';

function Button() {
    return <button className={styles.btn}>Click Me</button>;
}
```

**Pros:**
- Local scoping prevents conflicts
- Full CSS feature support
- Clear component/style relationship
- Compile-time errors for missing classes

**Cons:**
- Requires build configuration
- Extra syntax for global styles
- Learning curve for composition

## Choosing the Right Approach

- **Inline styles**: Simple components, highly dynamic styling
- **External CSS**: Global styles, traditional CSS workflow
- **CSS Modules**: Component-specific styles, medium to large apps

Many React projects use a combination of these approaches, with CSS Modules being the most common choice for component-specific styling in larger applications.