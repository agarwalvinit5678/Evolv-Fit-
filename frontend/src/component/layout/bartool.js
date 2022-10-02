import React, { Fragment } from "react";
import ReactTooltip from 'react-tooltip';
import HorizontalBarGraph from '@chartiful/react-horizontal-bar-graph'
import("./barchart.css");

const Barr=(props)=>{
     return (
       
        <div className="barcontainerout">
        Nutritional values
        <div className="barcontainerin">
        <div className="Bar1">
             <HorizontalBarGraph
            data={[props.fatCon,props.proteinCon,props.carbCon]}
            labels={['F','P','C']}
            width={200}
            height={400}
            barRadius={7}
            barColor='#82d551'
            

            baseConfig={{
                startAtZero : true,

                hasXAxisLabels: true,

                hasYAxisLabels: true,

                xAxisLabelCount: 3,
                hasYAxisBackgroundLines: true,
                
                xAxisLabelStyle: {
                
                fontSize: 10,
                fontWeight:2,
                color: '#FFFFFF',
                rotation: 180,
                width: 350,
                yOffset: 0,
                xOffset: 0,
                },
                yAxisLabelStyle: {
                fontSize: 10,
                fontWeight:2,
                color: '#FFFFFF',
                prefix: '$',
                rotation: 180,
                position: 'left',
                xOffset: 0,
                yOffset: 0,
                decimals: 2,
                height: 0
                },
                xAxisBackgroundLineStyle: {
                strokeWidth: 1,
                color: 'white'
                },

                yAxisBackgroundLineStyle: {
                strokeWidth: 1,
                color: 'white'
                }
            }}
            style={{
                
                marginBottom: 0,
                marginLeft:0,
                padding: 35,
                paddingTop: 20,
                borderRadius: 10,
                width: 20,
                backgroundColor: 'black',
                
               
            }}
            />
            </div>
            </div>
           </div>
        
   
        
     );  
};
export default Barr;
