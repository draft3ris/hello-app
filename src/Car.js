import { useState } from "react";
import Caricon from "./Car.svg";
import Cart from "./Cart.svg";
import "./Car_animation.css";

function Car(props){
    const [imageName, setImage] = useState(Caricon);
    //initial state set to car icon

    const changeImage = () => {
        let curr_image = imageName;

        if(curr_image === Caricon){
            setImage(Cart);
        }
        else{
            setImage(Caricon);
        }
        //swap icon when button clicked
    }

    return(
        <div className="imgNButton">
            <img src={imageName} className="Car-icon" /> <br/>
            <button onClick={changeImage} className="CarIconButton">Change Image</button>
        </div>
    );
}

export default Car;