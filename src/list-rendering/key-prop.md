## Key Prop in React

- The "key" prop is crucial when rendering lists in React v16 for several reasons:

- 1.  **Identification**: Keys help React identify which items have changed, been added, or removed in a list, which is essential for efficient DOM updates.

- 2.  **Reconciliation optimization**: React uses `keys` to match elements between renders, improving the efficiency of the reconciliation process.

- 3.  **Component state preservation**: Keys ensure that component state is preserved across render when the position of items in a list changes.

- 4.  **Avoiding rendering bugs**: Without keys (or with poorly chosen keys), you may encounter unexpected behavior when items are added, removed, or reordered.

- Best practices:
- Keys should be stable, predictable, and unique among siblings
- Use unique IDs from your data as keys (e.g., item.id)
- Avoid using array indices as keys when the list can reorder
- Keys only need to be unique among siblings, not globally
- Keys cannot be accessible to Child Components

**Example**:

```javascript
{
  items.map((item) => <ListItem key={item.id} value={item.value} />);
}
```
