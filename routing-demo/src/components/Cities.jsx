import { useParams } from 'react-router-dom'

const Cities = props => {
    const { city } = useParams();
    return(
        <div>
            <h2>This is the Cities component for {city}</h2>
        </div>
    );
}

export default Cities;