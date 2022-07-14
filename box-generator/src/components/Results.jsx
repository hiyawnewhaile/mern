const Results = props => {

    const boxStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        marginTop: "10px"
    }

    return(
        <div style={boxStyle}>
            {
                props.allBs.map((box, i) => {
                    return <div key={i} style={{width:parseInt(box.Size), height:box.Size + "px", backgroundColor:box.Color }} ></div>
                })
            }
        </div>
    )

}

export default Results;