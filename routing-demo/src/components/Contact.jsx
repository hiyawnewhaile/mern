import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Contact = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();
    const sendSurvey = e => {
        e.preventDefault();
        console.log(name, comment);
        navigate("/about");
        
    }
    return (
        <div>
            <h2>This is my Contact page!</h2>
            <form onSubmit={sendSurvey}>
                <label>Your Name:</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label>Your Comment:</label>
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                ></textarea>
                <label htmlFor="Password">Password</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="Confirm">Confirm Password</label>
                <input type="text" onChange={(e) => setConfirm(e.target.value)} />
                { password === confirm ? "" : <p>Passwords must match!</p> }
                <input type="submit" value="Submit Survey" />
            </form>
        </div>
    );
};

export default Contact;
