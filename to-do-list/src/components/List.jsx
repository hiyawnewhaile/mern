import { useState } from "react";

const List = props => {
    // const [status, setStatus] = useState(false)

    // const checkHandler = e => {
    //     setStatus(!status);
    // }



    const strikeThrough = {
        textDecoration: "line-through"
    }

    return(
        <div>
            {/* <ul> */}
                {
                    props.allTasks ? props.allTasks.map((task, i) => {
                        return <p key={i} >
                            <span style={task.Status ? strikeThrough : {}}>
                                {task.ToDo}
                            </span>
                            <input type="checkbox" checked={task.Status} onChange={(e) => props.status(i)}/>
                            <button onClick={() => props.delete(i)}>Delete</button>
                            </p>
                    }) : ""
                }
            {/* </ul> */}
        </div>
    )
};

export default List;