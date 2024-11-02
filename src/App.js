import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await window.electron.fetchData();
            setData(result);
        };

        fetchData();
    }, []);
  return (
    <div>
    <h1>Data from SQLite</h1>
    <ul>
        {data.map(item => (
            <li key={item.id}>{item.name}</li> // Adjust according to your data structure
        ))}
    </ul>
</div>
);
}

export default App;
