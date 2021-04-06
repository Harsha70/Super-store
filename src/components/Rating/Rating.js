import React from 'react'
import star_empty from '../../images/star_empty.svg'
import star_full from '../../images/star_full.svg'
import star_half from '../../images/star_half.svg'

import { useEffect, useState } from 'react';

export default function Rating({score}) {
    // console.log(score)
    const [rating, setrating] = useState([])
    const star_arr = Array(5).fill(star_empty)
    useEffect(() => {
        const rounddec = score-Math.floor(score)
        for (let i=0;i<Math.floor(score);i++){
            star_arr[i]=star_full
        }
        if (rounddec===0.5){
            star_arr[Math.floor(score)]=star_half
        }
        setrating(star_arr)
    }, [])
    return (
        <div>
            {rating.map((star,index)=><img src={star} key={index} alt={`star${index}`} />)}
        </div>
    )
}
