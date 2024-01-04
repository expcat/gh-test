import { useState } from 'react';
import './App.css';
import HelloWorld from './compnents/HelloWorld';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </>
  );
}

export default App;
