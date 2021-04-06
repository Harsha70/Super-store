import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import './Display_Items.css';
import { Link } from 'react-router-dom';
import default_img from '../../images/product-default-img.jpg';

let addDefaultSrc = function(e){
    e.target.src = default_img
  }

export default function DisplayItems(props) {
    const {imageUrl,name,avgRating,price,_id} = props
    // console.log(Otherprops)
    
     return props?(
        <div className="cardWrapper">
            <div className="card">
                <img onError={addDefaultSrc} src={imageUrl} alt="imgs" className="cardImg" />
                <div className="cardIntro">
                    <p>{name}</p>
                    <Rating score={avgRating} />
                    <p><strong>${price}</strong></p>
                </div>
            </div>
            <Link to={`/item/${_id}`}><div className="viewBtn">View Item</div></Link>
        </div>

    ):<h1>Loading</h1>}

DisplayItems.prototype = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    avgRating: PropTypes.number,
    price: PropTypes.number,
    _id: PropTypes.number
}