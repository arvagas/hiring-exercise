// libraries
import React, { useState, useEffect } from 'react';
//components
import Item from './components/Item'
//styles
import './App.css';

function App() {
  const [results, setResults] = useState();

  let url = new URL('https://fetch-hiring.s3.amazonaws.com/hiring.json');

  // Will run once on DOM load; grabs data from supplied url
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setResults(res));
  }, []);

  return (
    <div>
      {results && results.map(item => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
}

export default App;
