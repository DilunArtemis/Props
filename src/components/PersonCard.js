import React, { Component } from 'react';

class PersonCard extends Component {
        constructor(props){
            super(props);
            this.state = {
                currentAge: props.age
            };
        }

    ageUpButton = () => {
        this.setState({
            currentAge: this.state.currentAge + 1
        });
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.currentAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.ageUpButton}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;