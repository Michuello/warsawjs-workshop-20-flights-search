import React from 'react'
import styles from './main.css'
const Flight = ({ flight }) => {
    console.log('a',flight)
    return <li class="new">Price: {flight.price} From: {flight.inboundAirport} To: {flight.outboundAirport}</li>

}

export  default  Flight