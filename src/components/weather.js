import React, { Component } from "react";
import Title from './title.js'
import Form from './form.js'
import Temperature from './temperature.js'

const apiKey = 'dbd1ac24d29321715d27209388205043';

class Weather extends Component {
    //The initial state
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`)
        const data = await apiCall.json();

        if (city && country) {
            console.log(data);
            //Setting the new state
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        }
        else {
            alert('Please enter your city and country')
        }
    }

    render() {
        return (
            <div>
                <Title />
                <Form getWeather={this.getWeather} />
                <Temperature
                    temp={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                />
            </div>
        )
    }
}

export default Weather;