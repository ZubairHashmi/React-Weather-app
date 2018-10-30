import React, { Component } from "react";

class temperature extends Component {

    render() {
        return (
            <div className="temperature">
                <h3>{this.props.city && this.props.country && this.props.city + ',' + this.props.country}</h3>
                <h3>{this.props.temp && <i class="fas fa-cloud-sun"></i>}</h3>
                <h3>{this.props.temp && this.props.temp + "C"} </h3>
                <h4>{this.props.humidity && "Humidity :" + this.props.humidity}</h4>
                <h4>{this.props.description && "Description :" + this.props.description}</h4>

            </div>
        )
    }
}

export default temperature;