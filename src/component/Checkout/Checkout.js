import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const navigate = useNavigate();
    return (
        <div className='background'>
            <div className='background2'>
                <div className='boxInside'>
                <div className='content'>
                  <label  htmlFor="">Your Destination</label>
                  <input type='name' placeholder='Your Destination'/>
             </div>
             <div className='check'>
              <div className='CheckIn'>
              <label  htmlFor="">Check In</label>
                  <input type='name' placeholder='01/05/22'/>
              </div>
              <div className='CheckOut'>
              <label  htmlFor="">Check Out</label>
                  <input type='name'  placeholder='05/06/22'/>
              </div>
             </div>
             <div className='details'>
            <div className='Rooms'>
            <label  htmlFor="">Rooms</label>
                  <input type='name'  placeholder='1'/>
            </div>
            <div className='Adults'>
            <label  htmlFor="">Adult</label>
                  <input type='name'  placeholder='1'/>
            </div>
            <div className='Children'>
  <label  htmlFor="">Children</label>
                  <input type='name'  placeholder='0'/>
            </div>
             </div>
            </div>
                <button onClick={() => navigate('/login')} className='submitBtn' to >Check Availability</button>
            </div>
        </div>
    );
};
export default Checkout;