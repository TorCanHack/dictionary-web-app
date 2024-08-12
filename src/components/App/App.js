import React, { useState} from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar'


function App() {

  const [definitions, setDefinitions] = useState([]);

  const fetchDefinitions = async (word) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinitions(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
      setDefinitions([]);
    }
  }
  return (
    <main className="border border-black">
      <SearchBar/>

      
    </main>
  );
}

export default App;
