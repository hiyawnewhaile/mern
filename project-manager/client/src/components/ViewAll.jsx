import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct'

const ViewAll = props => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [products]);
    return(
        <div>
            <AddProduct/>
            <h1>All Products</h1>
            <div>
                {
                    products ? products.map((prod, i) => (
                        <div key={i}>
                            <ul>
                                <li>
                                    <h2><Link to={`/product/viewone/${prod._id}`}>{prod.title}</Link></h2>
                            <h4>${prod.price}</h4>
                            <h4>{prod.description}</h4>
                                </li>
                            </ul>
                        </div>
                    )) : ""
                }
            </div>
        </div>
    )
};

export default ViewAll;