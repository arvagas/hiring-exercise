// libraries
import React, { useState, useEffect } from 'react';
//components
import ItemTable from './components/ItemTable';
//utils
import { dataFilter } from './utils/dataFilter';
//styles
import './styles/App.scss';

function App() {
  const [results, setResults] = useState();

  let url = new URL('https://fetch-hiring.s3.amazonaws.com/hiring.json');

  // Will run once on DOM load; grabs data from supplied url and applies filters
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let modifiedData = dataFilter(res);

        setResults(modifiedData);
      });
  }, []);

  return (
    <div className='container'>
      {results && results.map((item, index) => (
        <ItemTable key={Date.now()+index} data={item} />
      ))}
    </div>
  );
};

export default App;
