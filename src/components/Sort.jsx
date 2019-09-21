import React from 'react'

export const Sort = ({ sortBy, sortedItem, searchQuery, setQuery, searchBooks }) => (
    <div>
        <ul className="nav justify-content-between">
            <li className="nav-item">
                <button onClick={sortBy.bind(this, 'all')} active={sortedItem === "all"} className="nav-link">All</button>
            </li>
            <li className="nav-item">
                <button onClick={sortBy.bind(this, 'popular')} active={sortedItem === "popular"} className="nav-link">Popular</button>
            </li>
            <li className="nav-item">
                <button onClick={sortBy.bind(this, 'cheap')} active={sortedItem === "cheap"} className="nav-link">Price(cheap)</button>
            </li>
            <li className="nav-item">
                <button onClick={sortBy.bind(this, 'expensive')} active={sortedItem === "expensive"} className="nav-link">Price(expensive)</button>
            </li>
            <li className="nav-item">
                <button onClick={sortBy.bind(this, 'author')} active={sortedItem === "author"} className="nav-link">Author</button>
            </li>
            <li >
                <div className="search">
                    <button onClick={searchBooks}>
                    <i className="fa fa-search"></i>
                    </button>
                    <input type="text"value={searchQuery} onChange={e => setQuery(e.target.value)} placeholder="search.." />
                </div>
            </li>
        </ul>
    </div>
        )
