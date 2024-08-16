import React, { useState } from "react";
import searchIcon from '../../assets/images/icon-search.svg';


const SearchBar = ({onSearch, word, setWord,  setSearchTriggered}) => {
    
    const [serachError, setSearchError] = useState(false);

    

    

    const handleSearch = () => {

        let error = false;

        if (word.trim() === ''){
            setSearchError(true);
            error = true;
        } else {
            setSearchError(false);
        }
    
        if (error) return

        onSearch(word);
        setSearchTriggered(true);
    }

    return (
        <section className="my-4 md:mt-12">
            <input type="text" value={word} onChange={(e) => setWord(e.target.value)} className={`w-full h-12 md:h-16 bg-gray-200 rounded-2xl p-4 font-bold md:text-xl dark:bg-customGray hover:border hover:border-purple-600 ${serachError ? 'border border-red-500' : ''}`} placeholder=""/>
            <button className="absolute right-8 top-21 md:right-16 md:top-42 lg:px-82 " onClick={handleSearch}><img src={searchIcon} alt=""/></button>
            {serachError && <p className="text-red-500">Whoops, can’t be empty…</p>}
        </section>
    )
}

export default SearchBar