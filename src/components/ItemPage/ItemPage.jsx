import React from 'react'
import { useEffect, useState } from 'react';
import default_img from '../../images/product-default-img.jpg';

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

import './ItemPage.css'

import Rating from '../Rating/Rating';

const ItemPage= ({match, addItem}) => {
    const [state, setstate] = useState({'item':[],'quantity':1,'invalid':false,'instock':true})
    useEffect(() => {
        async function fetchData() {
            // You can await here
        const itemId = match.params.itemId 
        let response = await fetch(`https://gp-super-store-api.herokuapp.com/item/${itemId}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
          })
        const data = await response.json()
        setstate({...state,  'item':data})
          }
        fetchData();
        }, [])
    
    const addDefaultSrc = function(e){
        e.target.src = default_img
    }

    const { avgRating, description, imageUrl, name, price } = state['item']

    // console.log(quantity)
    const handleChange = (e)=>{
        const stock = e.target.value <= state['item']['stockCount']
        if (e.target.value>=1){
            setstate({...state,"quantity":Number(e.target.value),"invalid":false,"instock":stock})
        } else{
            setstate({...state,"quantity":e.target.value,"invalid":true,"instock":stock})
        }   
    }

    const item = state['item']
    const quantity = state['quantity']
    const invalid = state['invalid']
    const instock = state['instock']

    return (
        <div className="item-container">
            <div className="itemImg">
                <img onError={addDefaultSrc} src={imageUrl} alt={`cover of ${name}`} />
            </div>
            <div className="itemText">
                <h1>{name}</h1>
                {avgRating && <Rating score={avgRating} />}
                <hr />
                <p className="intro">{description}</p>
                <div className="price"><strong>${price}</strong></div>
                <div style={{display:"flex"}}>
                    Quantity:  &nbsp;
                    <input type="number" className="num-bg" min="1" value={quantity} onChange={handleChange} />
                    {invalid && <p className="invalid">Invalid</p>}
                </div>
                {instock?<></>:<p className="insufficient">Out of Stock</p>}
                <div className="add-btn" onClick={()=>addItem({item,quantity})}>Add to Cart</div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemPage)