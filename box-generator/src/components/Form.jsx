import { useState } from "react";

const Form = props => {

    const [myForm, setMyForm] = useState({
        Color: "",
        Size: 0
    });

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        props.newBox(myForm);
        setMyForm({
            Color: "",
            Size: 0
        });
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Color">Color</label>
                    <input type="text" name="Color" onChange={onChangeHandler} value={myForm.Color}/>
                    <label htmlFor="Size">Size</label>
                    <input type="number" name="Size" onChange={onChangeHandler} value={myForm.Size}/>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default Form;