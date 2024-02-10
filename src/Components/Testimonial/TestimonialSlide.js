import React from 'react'
import { IoIosQuote } from "react-icons/io";
import './TestimonialSlide.css'

export const TestimonialSlide = ({ item }) => {

    return (
        <div className='slide-container'>
            <div className='slide-header'>
                <span className='quote'><IoIosQuote /></span>
                <div>
                    {/* {renderStars(rating)} */}
                </div>
                {item?.company_image &&
                    <img className='company_image' src={item.company_image} alt={item.company} />
                }
            </div>
            <div className='slide-body'>
                {item.desc}
            </div>
            <div className='slide-footer'>
                {item.image
                    ?
                    <img src={item.image} alt={item.name} />
                    :
                    <div className='no-image'>{item.name.charAt(0)}</div>
                }

                <div className="details">
                    <h1 style={{ margin: 0 }}>{item.name}</h1>
                    <p style={{ margin: 0 }}>{item.company} | {item.role} </p>
                </div>
            </div>
        </div>
    )
}
