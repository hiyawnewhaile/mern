import { useState } from "react";

const Form = props => {
    const [Name, setName] = useState("");
    const [RealName, setRealName] = useState("");
    const [Power, setPower] = useState("");
    const [NumSideKicks, setNumSideKicks] = useState(0);
    const [IsAlive, setIsAlive] = useState(true);
    const [Universe, setUniverse] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        const character = {Name, RealName, Power, NumSideKicks, IsAlive, Universe};
        props.newChar(character);
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="RealName">Real Name</label>
                    <input type="text" name="RealName" onChange={(e) => setRealName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Power">Power</label>
                    <input type="text" name="Power" onChange={(e) => setPower(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="NumSideKicks"># of Sidekicks</label>
                    <input type="number" name="NumSideKicks" onChange={(e) => setNumSideKicks(e.target.value)}/>
                </div>
                <div>
                    <input type="checkbox" name="IsAlive" checked={IsAlive} onChange={(e) => setIsAlive(!IsAlive)} />
                    <label htmlFor="IsAlive">Is Alive?</label>
                </div>
                <div>
                    <label htmlFor="Universe">Universe?</label>
                    <input type="Radio" name="Universe" value="DC" onChange={(e) => setUniverse(e.target.value)}/>
                    <label htmlFor="Universe">DC</label>
                    <input type="Radio" name="Universe" value="Marvel" onChange={(e) => setUniverse(e.target.value)}/>
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