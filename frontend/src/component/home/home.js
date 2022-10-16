import React, { Fragment, useEffect, useState } from 'react';
import "./home.css";
import Usercard from '../layout/usercard.js';
import ReactDOM from 'react-dom'
import MetaData from '../layout/MetaData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPersonWalking,faUtensils,faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { getAllUsers } from '../../actions/userActions';
import axios from "axios";
import LoginSignUp from '../User/LoginSignUp';
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
  feedback={user.feedback}
  avatar={user.avatar}
  />
} 


const Home=()=> {
  const [userdata,setData]=useState([]);
  function setdata(userdatas){
   
    setData(userdatas);
    
  }
 const getAllUsers =async () => {
  try {
    let response = await axios.get('api/user/getallUsers')
  setdata(response?.data?.users);
    
    
  } catch (error) {
      console.log(error);
  }
}
  useEffect(() => {
    getAllUsers()
  },[])
  console.log(userdata);
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
    <MetaData title="Evolv Fit"/>
    
   <div className='banner'>
   
   {/* <button onClick={() => { setShowModal(true) }}>Signup/Login</button> */}
   

    <div className='blackbanner'>
    <div className='head'>
      <div className='headings'><FontAwesomeIcon icon={faPersonWalking} /> Steps </div>
      <div className='headings'><FontAwesomeIcon icon={faDumbbell} /> Workout</div>
      <div className='headings'><FontAwesomeIcon icon={faUtensils} /> Nutrition</div>
    </div>
    {/* <div className='usercardouter'> */}
      <div className='usercardinner'>
      <div className="container" id="container">
      
            {userdata.map((user) => createUserCard(user))}

            
          {/* </div> */}
       </div>
      </div>
    </div>
   </div>
   </Fragment>
  );
}

export default Home;
