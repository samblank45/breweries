import React from 'react'

const Breweries = ({breweries}) => {
  const renderContent = breweries.map(brewery => {
    return (
      <div className="card">
        <div className="image">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/f1/41/5d/250l-brewing-kit.jpg" />
        </div>
        <div className="content">
          <div className="header">
            {brewery.name}
          </div>
          <div className="description">
            {brewery.website_url}
          </div>
        </div>
    </div>
    )
  })

  return (
    <div className="ui link cards">
      {renderContent}
    </div>
  )
}

export default Breweries

