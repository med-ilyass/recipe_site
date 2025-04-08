import React, {useState} from "react";

function SearchBar({ onSearch }){

    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Search for meal"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            style={{padding: '8px', width:'250px' }}
            />
            <button type="submit" style={{padding: '8px 12px', marginLeft: '8px'}}>
                Search
            </button>
        </form>
    )
}
export default SearchBar;