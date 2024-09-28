import { useState } from "react";
import Sun from "./Sun.svg";
import Bulb from "./lightbulb.svg";
import "./Icon-button.css";

function Star_button(props){
    const [imageName, setImage] = useState(Bulb);
    //initial state set to Sun icon

    const changeImage = () => {
        let curr_image = imageName;

        if(curr_image === Bulb){
            setImage(Sun);
        }
        else{
            setImage(Bulb);
        }
        //swap icon when button clicked
    }

    return(
        <div className="imgNButton">
            <img src={imageName} className="various-icon" alt=""/> <br/>
            <button onClick={changeImage}>Change Theme</button>
        </div>
    );
}

export default Star_button;