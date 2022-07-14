import { useState } from "react";

const Form = props => {

    const [myForm, setMyForm] = useState({
        ToDo: "",
        Status: false
    })

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(myForm.ToDo.length === 0){
            return;
        }
        props.newToDo(myForm);
        setMyForm({...myForm, ToDo: ""})
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input type="text" name="ToDo" value={myForm.ToDo} onChange={onChangeHandler}/>
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
};

export default Form;