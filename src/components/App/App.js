import React, { useState} from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar'
import DefinitionList from '../DefinitionList/DefinitionList';
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode';
import FontToggle from '../FontToggle/FontToggle';
import logo from '../../assets/images/logo.svg'


function App() {

  const [definitions, setDefinitions] = useState([]);
  const [word, setWord] = useState('')
  const [searchTriggered, setSearchTriggered] = useState(false)
 

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
    <main className="dark:bg-black dark:text-white p-4 md:px-10 md:py-14 lg:px-96">
      <div className='flex flex-row items-center justify-between'>
      
        <img src={logo} alt='logo'/>
        <div className='flex flex-row items-center justify-between w-48 md:w-52'>
          <FontToggle/>
          <ToggleDarkMode/>
        </div>

      </div>
     
      <SearchBar onSearch={fetchDefinitions} word={word} setWord={setWord}  setSearchTriggered={setSearchTriggered} />
      <DefinitionList definitions={definitions} word={word} searchTriggered={searchTriggered}/>

      
    </main>
  );
}

export default App;
