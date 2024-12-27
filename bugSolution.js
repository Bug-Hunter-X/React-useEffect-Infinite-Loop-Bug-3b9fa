```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effect runs only once after the initial render
    // No more infinite loops!
    console.log('useEffect ran');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```