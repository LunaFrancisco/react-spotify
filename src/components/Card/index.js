import React from 'react'
import('./index.css')
export const Card = props => {
  const name = props.data.artists.items[0].name
  // const genres = props.data.artists.items[0].genres
  const image = props.data.artists.items[0].images[2].url
  const followers = props.data.artists.items[0].followers.total
  const href = props.data.artists.items[0].external_urls

  return (
    <div className='card'>
      <div className='artist-card'>
        <img src={image} alt="" />
        <div className='info'>
          <h1>{name}</h1>
          <p className='followers-count'>{followers} followers</p>
          <a className="moreInfo" href={href.toString()}> Mas Información</a>
        </div>
      </div>


    </div>

  )
}
