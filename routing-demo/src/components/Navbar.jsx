import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <h1>
                <Link to={"/about"}>About</Link> 
                |
                <Link to={"/contact"}>Contact</Link>
                |
                <Link to={"/cities/Chicago"}>Chicago</Link>
                |
                <Link to={"/cities/Burbank"}>Burbank</Link>
                |
                <Link to={"/cities/DC"}>DC</Link>
            </h1>
        </div>
    );
};

export default Navbar;
