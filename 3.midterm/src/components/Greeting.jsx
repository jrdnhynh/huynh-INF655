// imports
import { useState } from "react";

function Greeting({ username }) { // accepts username as a prop
    // task 1: track greeting text
    const [message, setMessage] = useState("Welcome to React!");
    const today = new Date().toLocaleDateString();

    // task 1: update message state when clicked
    const changeGreeting = () => {
        setMessage("Glad to have you here today!");
    };

    return (
        <div>
            <h1>Hello, {username}!</h1>
            <p>{message}</p>
            <p style={{ color: "blue", fontSize: "18px" }}>
                Today's Date is: {today}
            </p>
            {/* button to change greeting */}
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
}

export default Greeting;