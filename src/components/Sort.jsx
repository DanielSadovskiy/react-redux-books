import React, { useState } from 'react'

export const Sort = ({ sortBy, sortedItem, searchQuery, setQuery, searchBooks }) => {
    const [inputSearch,setSearch] = useState("");
    
    return (

        <div>
            <ul className="nav justify-content-between">
                <li className="nav-item">
                    <button onClick={() => sortBy('all')} active={sortedItem === "all"} className="nav-link">All</button>
                </li>
                <li className="nav-item">
                    <button onClick={()=>sortBy('popular')} active={sortedItem === "popular"} className="nav-link">Popular</button>
                </li>
                <li className="nav-item">
                    <button onClick={()=>sortBy('cheap')} active={sortedItem === "cheap"} className="nav-link">Price(cheap)</button>
                </li>
                <li className="nav-item">
                    <button onClick={()=>sortBy('expensive')} active={sortedItem === "expensive"} className="nav-link">Price(expensive)</button>
                </li>
                <li className="nav-item">
                    <button onClick={()=>sortBy('author')} active={sortedItem === "author"} className="nav-link">Author</button>
                </li>
                <li >
                    <div className="search">
                        <button onClick={()=>setQuery(inputSearch)}>
                            <i className="fa fa-search"></i>
                        </button>
                        <input type="text" value={searchQuery} onChange={e => setSearch(e.target.value)} placeholder="search.." />
                    </div>
                </li>
            </ul>
        </div>
    )
}
