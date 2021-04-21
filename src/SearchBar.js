import React, {useState, useEffect} from 'react'
import Breweries from './Breweries'

const SearchBar = ({ searchTermSubmit, breweries }) => {
  const [text, setText] = useState('')

  useEffect( () => {
    setText(text)
  }, [text])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    searchTermSubmit(text)
  }

  return (
    <div>
      <div className=" search-bar ui segment">
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label>Search Brewery</label>
            <input 
              type="text"
              value={text}
              onChange={ e => setText(e.target.value)}
            />
          </div>
        </form>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breweries  breweries={breweries}/>
    </div>
  )
}

export default SearchBar