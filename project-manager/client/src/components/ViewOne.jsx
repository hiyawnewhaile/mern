import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const ViewOne = props => {
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState(null);
    const { _id } = useParams();
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + _id)
            .then(res => setOneProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [_id])
    const handleDelete = id => {
        axios
            .delete("http://localhost:8000/api/products/delete/" + id)
            .then(() => {
                console.log("Item deleted")
                navigate("/")
            })
            .catch(err => console.log("Issue deleting", err))
    };
    return (
        <div>
            {
                oneProduct ? <div>
                    <h1>{oneProduct.title}</h1>
                    <h4>${oneProduct.price}</h4>
                    <h4>{oneProduct.description}</h4>
                    <Link to={`/product/update/${oneProduct._id}`}><button>Edit</button></Link>
                    <button onClick={() => handleDelete(oneProduct._id)}>Delete</button>
                </div> : ""
            }
        </div>
    )
}

export default ViewOne;