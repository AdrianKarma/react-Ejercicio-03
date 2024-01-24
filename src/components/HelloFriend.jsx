import { useState } from "react";
const HelloFriend = () => {
    const  [mensaje, setMensaje] = useState("");
    return (
        <div>
          <h1>Hello my Friend{mensaje}!</h1>  
          <button onClick={() =>setMensaje("(from Changes State)") } >Click me</button>
          <button onClick={() =>setMensaje("") } >Clean</button>
        </div>
    );
};

export default HelloFriend;