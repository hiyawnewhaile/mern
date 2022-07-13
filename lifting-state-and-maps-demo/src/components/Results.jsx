const Results = props => {
    return(
        <div>
            <h1>Results</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Real Name</th>
                        <th>Power</th>
                        <th># of SideKicks</th>
                        <th>Is Alive?</th>
                        <th>Universe</th>
                    </tr>
                </thead>
                {
                    props.allChars.map((character) => {
                        return <tr>
                            <td>{character.Name}</td>
                            <td>{character.RealName}</td>
                            <td>{character.Power}</td>
                            <td>{character.NumSideKicks}</td>
                            <td>{character.IsAlive? "Yes" : "NO"}</td>
                            <td>{character.Universe}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Results;