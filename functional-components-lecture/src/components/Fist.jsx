import { useState } from "react";

const darkMode = {
    backgroundColor: "black",
    color: "ghostwhite",
    padding: "10px"
}

const lightMode = {
    backgroundColor: "white",
    color: "black",
    padding: "10px"
}

const buttonStyle = {
    width: "100px",
    height: "40px",
    backgroundColor: "darkgray",
    fonttSize: "30px",
    color :"white",
    borderRadius: "10px"
}

const First = props => {
    // const [light, setLight] = useState(true);
    const [example, setExample] = useState("Hello")
    const {firstName, lastName, number} = props;
    // const switchLight = () => setLight(!light);
    const [myNumber, setMyNumber] = useState(number);
    const updateNumber = () => setMyNumber(myNumber + 1);
    return(
        <div>
            <h2>This is my first compoenet</h2>
            <h3> The name passed in was: {firstName} {lastName} </h3>
            <h3 onClick={updateNumber}> Your number: {myNumber} </h3>
            {/* <button style={buttonStyle} onClick={ switchLight }>{light? "On" : "Off"}</button> */}
        </div>
    )
}

export default First;