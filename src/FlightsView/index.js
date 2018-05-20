import React from 'react'
import Flight from './Flight'
class FlightsView extends React.Component{
    state = {
        flights: []
    }
    async componentDidMount() {
        const {from, to, departDate, returnDate} = this.props.searchData

        const url = 'https://warsawjs-flights-api.herokuapp.com/flights'
        const result = await fetch(`${url}/${departDate}/${returnDate}/${from}/${to}`)

        const flights = await result.json()
console.log('flights',flights)
        this.setState({flights})
    }
    render() {
        console.log(this.props)
        return (
            <ul>
                {
                    this.state.flights.map(
                        flight => <Flight key={flight.id} flight={flight}/>
                            )
                }
            </ul>
        )
    }
}
export default  FlightsView