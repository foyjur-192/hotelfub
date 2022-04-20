import React from 'react';
import './HomeCall.css'
import one from '../Images/bed.png'
import two from '../Images/Bill.png'
import three from '../Images/Bathtub.png'
import four from '../Images/Wi-Fi.png'
import five from '../Images/blanket.png'
import six from '../Images/Heater.png'
import { useNavigate } from 'react-router-dom';

const HomeCall = (props) => {
    const {img, name, details} = props.room;
    const navigate = useNavigate();
    return (
        <div className='Container-box'>
            <div>
                <img src={img} alt="" />
                <div className='Container-text'>
                    <h3>{name}</h3>
                    <p>{details}</p>
                </div>
                <div className='parent'>
                    <div className='box-one'> <img src={one} alt="" /> Bed</div>
                    <div className='box-two'><img src={two} alt="" />B-pad</div>
                    <div className='box-three'><img src={three} alt="" />Bathroom</div>
                </div>

                <div className='parent2'>
                    <div className='box-one'> <img src={four} alt="" /> Free Wifi </div>
                    <div className='box-two'><img src={five} alt="" />Towel</div>
                    <div className='box-three'><img src={six} alt="" />Heater</div>
                </div>
                <div className='thirdChild'>
                <h3><span>$50</span> per night</h3>
                <button className='btn' onClick={() => navigate('/checkout')}  >Check out</button>
                </div>
            </div>

        </div>
    );
};

export default HomeCall;