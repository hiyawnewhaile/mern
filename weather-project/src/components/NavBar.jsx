import { Link } from 'react-router-dom';

const NavBar = props => {
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
    return (
        <div className="navbar-cont">
            <div className="navbar-name">
                <h1>Weather App</h1>
            </div>
            <div className="navbar-input">
                <select name="" id="">
                    <option value="null">Select City</option>
                </select>
            </div>
            <div className="navbar-currentLocation">
                <Link to={""}><button>Use Current location</button></Link>
            </div>
        </div>
    )
}

export default NavBar;