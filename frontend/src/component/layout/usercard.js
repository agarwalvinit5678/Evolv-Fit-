import React from "react";
import ReactTooltip from 'react-tooltip';
import { PieChart, pieChartDefaultProps } from 'react-minimal-pie-chart';
import { useState } from "react";
import moment from 'moment';
import axios from "axios";
import Barr from "./bartool";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faCalendar,faUserCheck,faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import("./usercard.css");

function bar(props)
{ 
  return   <Barr 
  fatCon={props.fatConsumed}
  proteinCon={props.proteinConsumed}
  carbCon={props.carbConsumed}
  fatTar={props.fatTarget}
  proteinTar={props.proteinTarget}
  carbTar={props.carbTarget}
   />

} 

function ButtonIncrement(props) {
  
   return (
     <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
     +
     </button>
   )
}
function ButtonDecrement(props) {
  
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    -
    </button>
  )
}

const Usercard = (props) => {
          function postdata()
          {
              axios.post('api/user/updateTarget', {
              "username":props.email,
              "calorieTarget":caltarget,
              "proteinTarget":props.proteinTarget,
              "carbTarget":props.proteinTarget,
              "fatTarget":props.fatTarget,
              "stepsTarget":stepstarget
          })
                .then((response) => {
                  console.log(response);
                }, (error) => {
                  console.log(error);
                });
        } 
      const [hovered, setHovered] = useState(null);
      const [stepstarget, setTarget] = useState(props.stepsTarget);
      let incrementCounter = () =>{ setTarget(stepstarget+500);postdata();calcper()}
      let decrementCounter = () => {setTarget(stepstarget-500);postdata();calcper()}
      if(stepstarget<=0) {
        decrementCounter = () => setTarget(0);
      }
      const [caltarget, setcalTarget] = useState(props.calorieTarget);
      let incrementcalCounter = () => {setcalTarget(caltarget+100);postdata()}
      let decrementcalCounter = () => {setcalTarget(caltarget-100);postdata()}
      if(caltarget<=0) {
        decrementcalCounter = () => setcalTarget(0);
      }
      const [percentage,calcper]=useState(props.stepsWalked*100/(stepstarget));
      const dataMock = [
          { title: 'Fats', value: props.fatConsumed, color: '#47B5FF' },
          { title: 'Carbohydrates', value: props.carbConsumed, color: '#FFDE00' },
          { title: 'Protein', value: props.proteinConsumed, color: '#f55c85' },
        ];
   
     
  return (
    <div className="UserCard">
        <div className="col1 shiftdown">
        <img 
            className="circle-image"
            src={props.avatar.url}
            alt="avatar_img"
          
        />
        </div>
        
        <div className="col2 shiftdown">
        {props.name}
        <div >
        {props.email}</div>
        </div>
        <div className="col3">
        <div className="Stepcircle shiftdown">
        <CircularProgressbarWithChildren
                        value={percentage}
                        styles={buildStyles({
                            pathColor: '#59CE8F',
                        })}
                    >
                        <div className="children">
                            <h5 className="removeMargin">{props.stepsWalked}</h5>
                            <p3 className="removeMargin walked">walked</p3>
                        </div>
        </CircularProgressbarWithChildren>
                  </div>
        </div>
       
        <div > 
        <div className="StepsTarget shiftdown1">
            <ButtonIncrement onClickFunc={incrementCounter}/>  
            <div className="allmargin">{stepstarget/1000}K</div>
            <div className="allmargin">Target</div>
            <ButtonDecrement onClickFunc={decrementCounter}/>
           
        </div>
        </div>

        <div className="col4"> 
        <div className="WorkoutTarget shiftdown">
            <div className="allmargin"> <FontAwesomeIcon icon={faUserCheck} />{moment(props.performedDate).format("DD, MMM")}</div>
            {
                console.log()
            }
            <div className="allmargin checking1" style={moment(new Date()).format("DD, MMM")===moment(props.scheduledDate).format("DD, MMM")?{backgroundColor: "#E9573F"}:{backgroundColor: ""}}> <FontAwesomeIcon icon={faCalendar} /> {moment(props.scheduledDate).format("DD, MMM")}</div>
        </div>
        </div>
        <div className="checking2" style={props.feedback?{backgroundColor: "black"}:{backgroundColor: "#E9573F"}}>{props.feedback?'>':'!'}</div>
        <div className="col5"> 
        <div className="MealTarget">
            <div className="allmargin Stepcircle shiftdown">
            <div className="outerdiv">
            <div className="innerdiv center">
            <div className="centernumber">{props.calorieIntake}</div>
            <div className="centertext">Calories</div>
            </div>
            <a data-tip="Reactooltip" > 
            <PieChart data-tip data-for='barchart' data={dataMock} lineWidth={15}  
                onMouseOver={(_, index) => {
                setHovered(index);
              }}
              onMouseOut={() => {
                setHovered(null);
              }}
             /> </a>

            
              <ReactTooltip place="bottom"  effect="solid" getContent={() =>
          typeof hovered === 'number' ? bar(props) : null}>
            

              </ReactTooltip>
             {/* <ReactTooltip place="bottom"  effect="solid">
             <Barr 
                fatCon={props.fatConsumed}
                proteinCon={props.proteinConsumed}
                carbCon={props.carbConsumed}
                fatTar={props.fatTarget}
                proteinTar={props.proteinTarget}
                carbTar={props.carbTarget}
                 />
             </ReactTooltip> */}
            </div>
            </div>
            
        </div>
        </div>
      
        <div className="MealTarget">
             <ButtonIncrement onClickFunc={incrementcalCounter}/>  
             <div className="removeMargin2">{caltarget/1000}K</div>
             <div className="allmargin">Target</div>
            <ButtonDecrement onClickFunc={decrementcalCounter}/>
        
       
       
            
        </div>
        <div className="col6"> 
    
      <FontAwesomeIcon icon={faBell} />
     
        </div>
        
        
    </div>
  );
};

export default Usercard;

