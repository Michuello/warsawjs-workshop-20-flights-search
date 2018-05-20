import React from 'react'

export default class SearchView extends React.Component {
    state = {
        from: 'WAW',
        to: 'JFK',
        departDate: '2018-05-21',
        returnDate: '2018-05-28'
    }
onFormChange = propertyToUpdate => e => {
        this.setState({
            [propertyToUpdate]: e.target.value
        })
}
    onFromChange = (e) =>{
        this.setState({
            from: e.target.value
        })
    }

    onToChange = (e) =>{
        this.setState({
            to: e.target.value
        })
    }

    onDepartureDateChange = (e) =>{
        this.setState({
            departDate: e.target.value
        })
    }
    onReturnDateChange = (e) =>{
        this.setState({
            returnDate: e.target.value
        })
    }
onSubmit = e =>{
       e.preventDefault()
    this.props.onSearch(this.state)
}

    render() {
        console.log(this.state.from);
        return (
            <form onSubmit={this.onSubmit}>
                <label>From</label>
                <select value={this.state.from} onChange={this.onFromChange}>
                    <option>WAW</option>
                    <option>JFK</option>
                </select>

                <label>To</label>
                <select value={this.state.to} onChange={this.onToChange}>
                    <option>WAW</option>
                    <option>JFK</option>
                </select>

                <label> Depart Date</label>
                <input value={this.state.departDate} onChange={this.onDepartureDateChange} type='date' />

                <label> Return Date</label>
                <input value={this.state.returnDate} onChange={this.onReturnDateChange} type='date' />

                <button type='submit'>Search</button>
            </form>
        )
    }
}