import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState()

  let url = new URL('https://fetch-hiring.s3.amazonaws.com/hiring.json');

  // Will run once on DOM load; grab data from supplied url
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setResults(res));
  }, []);

  return (
    <div>
    </div>
  );
}

export default App;
