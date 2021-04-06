import React from 'react'

import DisplayItems from '../Display_Items/Display_Items'


export default function DealsPage({items}) {
    // console.log("items", items)
    return (
        <div className="container">
            {items.length>0?
            items.map((item,id)=> <DisplayItems key={id} {...item}/>):
            <h1>There are no on-sale Items at this time.</h1>}
        </div>
    )
}
