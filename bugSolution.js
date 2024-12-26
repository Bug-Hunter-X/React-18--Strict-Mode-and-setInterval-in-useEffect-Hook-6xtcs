```javascript
//In someComponent.js

const SomeComponent = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default SomeComponent;
```