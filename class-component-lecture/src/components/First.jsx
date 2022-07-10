import { Component } from "react";

const darkMode = {
    backgroundColor: "black",
    color: "ghostWhite",
    padding: "10px"
}

const lightMode = {
    backgroundColor: "white",
    color: "black",
    padding: "10px"
}

class First extends Component {
    // Declare constructor to overide the default constructor to be able to set the state object
    constructor(props){
        // gives us all the functionality of the default constructor that come with component
        super(props);
        this.state = {
            light: true
        }
    }
    render(){
        const {firstName} = this.props;
        return(
            <div style={this.state.light ? lightMode : darkMode}>
                <h2>This is component 1</h2>
                <h3>This is the next part of the component</h3>
                <h3>The passed in name was: {firstName}</h3>
                <button onClick={ () => {this.setState({light: !this.state.light})}}>{ this.state.light ? "On" : "Off" }</button>
            </div>
        );
    }
}

export default First;