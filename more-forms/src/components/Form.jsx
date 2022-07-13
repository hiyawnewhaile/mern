import { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [FNError, setFNError] = useState("");
    const [lastName, setLastName] = useState("");
    const [LNError, setLNError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [CPError, setCPError] = useState("");

    const handleFN = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFNError("First Name is required!")
        } else if(e.target.value.length < 3){
            setFNError("First Name must be atleast 3 characters")
        } else{
            setFNError("")
        }

    }

        const handleLN = (e) => {
            setLastName(e.target.value);
            if(e.target.value.length < 1){
                setLNError("Last Name is required!")
            } else if(e.target.value.length < 3){
                setLNError("Last Name must be atleast 3 characters")
            } else{
                setLNError("")
            }
        }

        const handleEmail = (e) => {
            setEmail(e.target.value);
            if(e.target.value.length < 1){
                setEmailError("Email is required!")
            } else if(e.target.value.length < 5){
                setEmailError("Email must be atleast 5 characters")
            } else{
                setEmailError("")
            }
        }

        const handlePassword = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < 1){
                setPasswordError("Password is required!")
            } else if(e.target.value.length < 8){
                setPasswordError("Password must be atleast 8 characters")
            } else{
                setPasswordError("")
            }
        }

        const handleCP = (e) => {
            setConfirmPassword(e.target.value);
            if(e.target.value !== password){
                setCPError("Passwords must match!")
            } else{
                setCPError("")
            }
        }

    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label> First Name </label>
                    <input type="text" onChange={handleFN} />
                    {
                        FNError ? 
                        <p style={{color: "red"}}>{FNError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label> Last Name </label>
                    <input type="text" onChange={handleLN} />
                    {
                        LNError ? 
                        <p style={{color: "red"}}>{LNError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label> Email </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError ? 
                        <p style={{color: "red"}}>{emailError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label> Password </label>
                    <input type="text" onChange={handlePassword} />
                    {
                        passwordError ? 
                        <p style={{color: "red"}}>{passwordError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label> Confirm Password </label>
                    <input type="text" onChange={handleCP} />
                    {
                        CPError ? 
                        <p style={{color: "red"}}>{CPError}</p> :
                        ""
                    }
                </div>
                <input type="submit" value="submit" />
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>

    );
}

export default Form;