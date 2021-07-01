// libraries
import React, { useState, useEffect } from 'react';
//components
import ItemTable from './components/ItemTable'
//styles
import './App.css';

function App() {
  const [results, setResults] = useState();

  let url = new URL('https://fetch-hiring.s3.amazonaws.com/hiring.json');

  // Will run once on DOM load; grabs data from supplied url and applies filters
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let tempArr = [];

        // Filter out items with blank/null name
        res.forEach(list => {
          if (list.name) tempArr.push(list);
        });

        // Sorts array by name
        tempArr.sort((a, b) => {
          // Specifically tailored to naming scheme; will compare number within name
          let first = parseInt(a.name.slice(5));
          let second = parseInt(b.name.slice(5));

          if (first > second) return 1;
          else if (first < second) return -1;
          else return 0;
        })

        // Sorts array further by List ID
        tempArr.sort((a, b) => a.listId - b.listId);

        setResults(tempArr);
      });
  }, []);

  return (
    <div>
      <ItemTable key={Date.now()} data={results} />
    </div>
  );
};

export default App;
