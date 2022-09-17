import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';
import 'react-circular-progressbar/dist/styles.css';
import("./usercard.css");

const Usercard = (props) => {
    const percentage=(props.stepsWalked*100/(props.stepsTarget));
    const dataMock = [
        { title: 'Fats', value: props.fatConsumed, color: '#E38627' },
        { title: 'Carbohydrates', value: props.carbConsumed, color: '#C13C37' },
        { title: 'Protein', value: props.proteinConsumed, color: '#6A2135' },
      ];
      
  return (
    <div className="UserCard">
        <div className="col1">
        <img 
            className="circle-image"
            src="props.img"
            alt="avatar_img"
        />
        </div>
        
        <div className="col2">
        {props.name}
        <div className="NameEmail">
        {props.email}</div>
        </div>
        <div className="col3">
        <div className="Stepcircle">
        <CircularProgressbarWithChildren
                        value={percentage}
                        styles={buildStyles({
                            pathColor: '#59CE8F',
                        })}
                    >
                        <div className="children">
                            <h5 className="removeMargin">{props.stepsWalked}</h5>
                            <p3 className="removeMargin">walked</p3>
                        </div>
        </CircularProgressbarWithChildren>
                  </div>
        </div>
       
        <div > 
        <div className="StepsTarget">
            <div className="allmargin">{props.stepsTarget/1000}K</div>
            <div className="allmargin">Target</div>
        </div>
        </div>

        <div className="col4"> 
        <div className="WorkoutTarget">
            <div className="allmargin Stepcircle">
            <PieChart data={dataMock} lineWidth={15}   />
            </div>
            <div className="allmargin">Target</div>
        </div>
        </div>
        <div className="col5"> 
        <div className="MealTarget">
            <div className="allmargin Stepcircle">
            <PieChart data={dataMock} lineWidth={15}   />
            </div>
            <div className="allmargin">Target</div>
        </div>
        </div>
    
        <div className="MealTarget">
            <div className="removeMargin2">
            {props.calorieIntake} Cal Consumed
            </div>
            <div className="removeMargin2">{props.calorieTarget} Cal Target</div>
        </div>
        
        
    </div>
  );
};

export default Usercard;

