import React from "react";
import {ReactNavbar} from "overlay-navbar";
import {BrowserRouter as Router} from "react-router-dom";
const options={
        link1Text:"About Us",
        link2Text:"Register/Signup",
        link3Text:"Contact Us",
        link4Text:""  ,
        link1Color:"white",
        link1Size: "1.3vmax",
      nav1justifyContent: "flex-end",
      nav2justifyContent: "flex-end",
      nav3justifyContent: "flex-start",
      nav4justifyContent: "flex-start",
      link1ColorHover: "#eb4034",
      link1Margin: "1vmax",
      profileIconUrl: "/login",
      profileIconColor: "rgba(35, 35, 35,0.8)",
      profileIconColorHover: "#eb4034",
};
const Header=()=>{
    return <div>
<ReactNavbar
{...options}
/>
    </div>
};
export default Header;