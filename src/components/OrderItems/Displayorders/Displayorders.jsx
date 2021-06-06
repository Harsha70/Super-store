const Displayorders = ({itemss}) => {
    const {item, quantity} = itemss
    

    return (
        <div>
        <div className="cartItems">
            <img src={item.imageUrl} alt="imgs" className="cartImg" />
            <div>
                <div className="titleprice">
                    <p className="Itemname">{item.name}</p>
                    <p className="price"><strong>${item.price}</strong></p>
                </div>
                
                <div style={{display:"flex", paddingTop:"10px"}}>
                    <span style={{paddingRight:"10px"}}>Quantity:</span>
                    <div className='arrow' >
                        &#10094;
                    </div>
                        <span className='value'> {quantity}</span>
                    <div className='arrow' >
                        &#10095; 
                    </div>
                </div>
            </div>
        </div>
        {/* <p>Price {price}</p> */}
        </div>
    )
}
export default Displayorders