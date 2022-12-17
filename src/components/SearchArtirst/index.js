import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../Card/index.js'

import benito from '../../mockup/artist.json'

import('./index.css')

export const SearchArtist = () => {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      setToken(token)
    }
  }, [])

  const searchArtist = async (e) => {
    e.preventDefault()
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    })
    setData(data)
  }
  return (
    <div>
      <div className='search-bar'>
        <form onSubmit={searchArtist}>
          <input placeholder='Bad Bunny...' className='search-artist search-icon' type="text" onChange={e => setSearchKey(e.target.value)}></input>
        </form>

      </div>
      <Card
        data={data ? data : benito}
      />
    </div>
  )
}
