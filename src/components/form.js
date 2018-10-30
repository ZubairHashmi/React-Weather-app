import React, { Component } from "react";

class Form extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="country" placeholder="Country....." />
                    <input type="text" name="city" placeholder="City......" />
                    <button className="btn btn-primary">Get Weather</button>
                </form>
            </div>
        )
    }
}

export default Form;