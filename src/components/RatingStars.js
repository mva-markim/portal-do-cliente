import React from 'react'

const starIcon = require('../assets/img/icons/svg/star-solid.svg')
const clockIcon = require('../assets/img/icons/svg/clock-solid.svg')

const RatingStars = (props) => {
    return (
        <button className="rating-button">
            {
                props.starsNumber > 0 &&
                <span><img src={starIcon} alt="Ícone de avaliação" /> {props.starsNumber}</span>
            }
            {
                !props.starsNumber &&
                <img src={clockIcon} alt="Ícone de avaliação" className='rating-waiting' />
            }
        </button>
    )
}

export default RatingStars
