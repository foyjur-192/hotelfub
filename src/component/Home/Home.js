import React, {} from 'react';

import { useNavigate } from 'react-router-dom';
import HomeCall from '../HomeCall/HomeCall';
import Hook from '../Hook/Hook';
import PageTitle from '../PageTitle/PageTitle';
import './Home.css';

const Home = () => {
   const [rooms, setRooms] = Hook();
   const navigate = useNavigate();
 


    return (
    <>    
   <PageTitle title="Home"></PageTitle>




    <div className='Container'>
        
        <div className='Hero-area'>
            <div className='main-box'>
            <div className='box-area'>
         <h1 className='Headline'>FUB Hotel & Resort for your Comfort and Happiness</h1>
         <button onClick={() => navigate('/checkout')} className='Hero-btn'>Book Now</button>
         </div>
            </div>
       
        </div>

     <div >
         <h2 className='second-headline'>Checkout our Packages</h2>
         <div className='container-box'>
         {
            rooms.map(room => <HomeCall key={room.id} room ={room}></HomeCall> )
        }
         </div>
     
     </div>
      
    </div>
    </>
    );
};

export default Home;