import { useState } from "react";

const Tabs = props => {

    const [show, setShow] = useState("");

    const clickHandler = () => {
        setShow(props.content);
        props.click(show)
    }

    return(
        <div>
            <div>
                <button onClick={clickHandler}>{props.lable}</button>
            </div>
        </div>
    )
}

export default Tabs;