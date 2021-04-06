import React from 'react'
import './homepage.css';

import DisplayItems from '../Display_Items/Display_Items'

export default function HomePage({items}) {
    // console.log("items", items)
    return (
        <div className="container">
            {items.map((item,id)=> <DisplayItems key={id} {...item}/>)}
        </div>
    )
}
