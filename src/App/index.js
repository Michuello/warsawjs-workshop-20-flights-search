import React from 'react'
import SearchView from '../SearchView'
import FlightsView from '../FlightsView'


export default class App extends React.Component {
    state = {
        view: 'search',
        serachData: {
            to: null,
            from: null,
            departData: null,
            returnData: null
        }

    }
    onSearch = (searchData) => {
        this.setState({
            view: 'flights',
            searchData
        })
    }
    render() {
        const {view, searchData} = this.state
        switch(this.state.view) {
            case 'search':
                return <SearchView onSearch={this.onSearch}/>
            case "flights":
                return <FlightsView searchData={searchData}/>
            default:
                return <p>Ooops!</p>
        }
    }
}