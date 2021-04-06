import React from 'react'
import './homepage.css';

import DisplayItems from '../Display_Items/Display_Items'
import SearchBox from '../SearchBox/SearchBox';
import { useState, useEffect } from 'react';

import ReactPaginate from 'react-paginate';

export default function HomePage({items, searchChange}) {
    // console.log("items", items)
    const [pageNumber, setpageNumber] = useState(0)
    
    useEffect(() => {
		window.scrollTo(0, 0);
	}, [pageNumber]);
    
    const itemsPerPage = 8
    const itemsVisited = pageNumber * itemsPerPage

    const displayItems = items.slice(itemsVisited, itemsVisited+itemsPerPage).map(
        (item,id)=> <DisplayItems key={id} {...item}/> )

    const pageCount = Math.ceil(items.length/itemsPerPage)
    const changePage = ({selected}) =>{
        setpageNumber(selected)
    }
    return (
        <div>
            <SearchBox searchChange={searchChange}/>
            {items.length>0 ?
            <div>
            <div className="container">
            {displayItems} 
        </div>
        <ReactPaginate 
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationbts"}
            disabledClassName={"disable"}
            activeClassName={"paginationactive"}
        /></div>: <h1>No Results Found</h1>
            }
        </div>
        
    )
}
