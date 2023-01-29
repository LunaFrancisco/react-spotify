import React from 'react'
import('./index.css')
export const Card = props => {
  // const id = props.data.id
  const name = props.data.name
  // const genres = props.data.artists.items[0].genres
  const image = props.data.image
  const followers = props.data.followers
  // const href = props.data.artists.items[0].external_urls

  return (
    <div className='card'>
      <div className='artist-card'>
        <img src={image} alt="" />
        <div className='info'>
          <h1>{name}</h1>
          <p className='followers-count'>{followers} followers</p>
          <a className="moreInfo" href={() => false}> Mas Información</a>
        </div>
      </div>
    </div>

  )
}
