import React, { useState } from "react";
import searchIcon from '../assets/images/icon-search.svg';


const SearchBar = ({onSearch}) => {
    const [word, setWord] = useState('')

    const handleSearch = () => {
        onSearch(word)
    }

    return (
        <section>
            <input/>
            <button><img src={searchIcon} alt=""/></button>
        </section>
    )
}

export default SearchBar