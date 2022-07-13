import { useState } from "react";

const Form = props => {
    // These are the attributes of item I am making
    const [Name, setName] = useState("");
    const [Picture, setPicture] = useState("");
    const [canRender, setCanRender] = useState(false);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setCanRender(true);
    }

    const TextValid = input => {
        if(input.length === 0){
            return false;
        }
        return true;
    }
    return(
        <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="Name" onChange={e => setName(e.target.value)} />
                {TextValid(Name) ? "" : <p className="text-danger">"Name is required"</p>}
            </div>
            <div>
                <label htmlFor="Picture">Picture</label>
                <input type="text" name="Picture" id="Picture" onChange={e => setPicture(e.target.value)} />
                {TextValid(Picture) ? "" : <p className="text-danger">"Picture is required"</p>}
            </div>
            <input type="submit" value="submit" />
        </form>
        {
            canRender? 
                <div>
                    <h4>Name: {Name}</h4>
                    <img src={Picture} alt="pic"/>
                </div> : ""
        }
        </div>
    )
}

export default Form;