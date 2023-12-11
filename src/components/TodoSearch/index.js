import React from "react";
import "./main.css";

function TodoSearch( {searchValue, setSearchValue, loading} ) {
  
  return( 
    <input 
      placeholder="Cut onion" 
      className="TodoSearch" 
      value={searchValue} 
      onChange={(event) => {setSearchValue(event.target.value)}}
      disabled={loading}
    />
  )
}

export { TodoSearch };
