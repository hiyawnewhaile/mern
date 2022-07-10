import { Component } from "react";



class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }

    ageUp = () => this.setState({age: this.state.age + 1})

    style = {
        backgroundColor: "ghostWhite",
        borderRadius: "50px",
        padding: "10px"
    }

    render(){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button style={this.style} onClick = {this.ageUp}>Birthday button for {firstName} {lastName}</button>
            </div>
            );
    }
}

export default Profile;