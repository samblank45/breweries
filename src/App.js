import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      breweries: [],
      city: ''
    }
  }

  searchTermSubmit = async (term) => {
    const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${term}`)
    this.setState({
      city: term,
      breweries: response.data
    })
    console.log(this.state.breweries)
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar 
          searchTermSubmit={this.searchTermSubmit}
          breweries={this.state.breweries}
        />
      </div>
    )
  }
}

export default App