import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const ViewOne = props => {
    const [oneProduct, setOneProduct] = useState(null);
    const { _id } = useParams();
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + _id)
            .then(res => setOneProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [_id])
    return(
        <div>
        {
            oneProduct ? <div>
            <h1>{oneProduct.title}</h1>
            <h4>${oneProduct.price}</h4>
            <h4>{oneProduct.description}</h4>
        </div> : ""
        }
        </div>
    )
}

export default ViewOne;