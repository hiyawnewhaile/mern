import { useState } from "react";

const Form = props => {
    // Option 'A' for making a form
    // const [Name, setName] = useState("");
    // const [RealName, setRealName] = useState("");
    // const [Power, setPower] = useState("");
    // const [NumSideKicks, setNumSideKicks] = useState(0);
    // const [IsAlive, setIsAlive] = useState(true);
    // const [Universe, setUniverse] = useState("");

    // Option 'B' for making a form
    const [myForm, setMyForm] = useState({
        Name: "",
        RealName: "",
        Power: "",
        NumSideKicks: 0,
        IsAlive: true,
        Universe: ""
    });

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        props.newChar(myForm);
    }

    const checkedHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.checked})
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="RealName">Real Name</label>
                    <input type="text" name="RealName" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="Power">Power</label>
                    <input type="text" name="Power" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="NumSideKicks"># of Sidekicks</label>
                    <input type="number" name="NumSideKicks" onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="checkbox" name="IsAlive" checked={myForm.IsAlive} onChange={checkedHandler} />
                    <label htmlFor="IsAlive">Is Alive?</label>
                </div>
                <div>
                    <label htmlFor="Universe">Universe?</label>
                    <input type="Radio" name="Universe" value="DC" onChange={onChangeHandler}/>
                    <label htmlFor="Universe">DC</label>
                    <input type="Radio" name="Universe" value="Marvel" onChange={onChangeHandler}/>
                    <label htmlFor="Universe">Marvel</label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form;