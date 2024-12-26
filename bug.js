```javascript
//In someComponent.js

const SomeComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This will cause an error in React 18+ 
    const id = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);
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