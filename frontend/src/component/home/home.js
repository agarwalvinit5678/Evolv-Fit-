import React, { Fragment, useEffect, useState } from 'react';
import "./home.css";
import Usercard from '../layout/usercard.js';
import ReactDOM from 'react-dom'
import MetaData from '../layout/MetaData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPersonWalking,faUtensils,faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { getAllUsers } from '../../actions/userActions';
import axios from "axios";
const userdata= [
  {
      "_id": "632402e4d8ac90119a841a62",
      "name": "Vinit Agarwal",
      "email": "demo2@gmail.com",
      "role": "user",
      "stepsWalked": 5698,
      "stepsTarget": 8000,
      "performedDate": 10,
      "scheduledDate": 0,
      "calorieIntake": 800,
      "calorieTarget": 1000,
      "proteinConsumed": 40,
      "proteinTarget": 67,
      "carbConsumed": 30,
      "carbTarget": 78,
      "fatConsumed": 10,
      "fatTarget": 42,
      "username": "demo2@gmail.com",
      "__v": 0
  },
  {
      "_id": "63259692c6638aa12366fcce",
      "name": "Vinit Agarwal",
      "email": "demo1@gmail.com",
      "role": "user",
      "stepsWalked": 0,
      "stepsTarget": 0,
      "performedDate": 0,
      "scheduledDate": 0,
      "calorieIntake": 0,
      "calorieTarget": 0,
      "proteinConsumed": 0,
      "proteinTarget": 0,
      "carbConsumed": 0,
      "carbTarget": 0,
      "fatConsumed": 0,
      "fatTarget": 0,
      "username": "demo1@gmail.com",
      "__v": 0
  }
];
function createUserCard(user)
{
  return < Usercard 
  key={user.email}
  name={user.name}
  // img={user.avatar.url}
  email={user.email}
  stepsWalked={user.stepsWalked}
  stepsTarget={user.stepsTarget}
  performedDate={user.performedDate}
  scheduledDate={user.scheduledDate}
  calorieIntake={user.calorieIntake}
  calorieTarget={user.calorieTarget}
  proteinConsumed={user.proteinConsumed}
  proteinTarget={user.proteinTarget}
  carbConsumed={user.carbConsumed}
  carbTarget={user.carbTarget}
  fatConsumed={user.fatConsumed}
  fatTarget={user.fatTarget}

  />
} 
const Home=()=> {
// const [data,setData] = useState()
// const getAllUsers = async () => {
//     try {
//       let response = await axios.get('api/user/getallUsers');
        
//       console.log(response.data.users);
//       setData(response?.data?.users)
//           console.log(data);
     
//     } catch (error) {
//         console.log(error);
//     }
//   };
  
//   useEffect(() => {
//     getAllUsers()
//   },[])
 
  return (
    <Fragment>
    <MetaData title="Evolv Fit"/>
    
   <div className='banner'>
    <div className='blackbanner'>
    <div className='head'>
      <div className='headings'><FontAwesomeIcon icon={faPersonWalking} /> <pre> </pre>Steps </div>
      <div className='headings'><FontAwesomeIcon icon={faDumbbell} /> <pre> </pre>Workout</div>
      <div className='headings'><FontAwesomeIcon icon={faUtensils} /> <pre> </pre>Nutrition</div>
    </div>
      <div className='usercard'>
      <div className="container" id="container">
      
            {userdata.map((user) => createUserCard(user))}

            
          </div>
      </div>
    </div>
   </div>
   </Fragment>
  );
}

export default Home;
