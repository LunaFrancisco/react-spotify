import React, { useState, useEffect } from 'react'
import { Login } from '../components/Login/login.js'
import { LogoutButton } from '../components/Logout/index.js'
import { SearchArtist } from '../components/SearchArtirst/index.js';
import('./Home.css')

export const Home = () => {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      setToken(token)
    }
  }, [])

  return (
    <div className='Home'>

      {!token 
        ? <Login />
          : <>
            <LogoutButton />
            <h1 className='title'>Buscador de Artistas</h1>
            <div className='home-content'>
              <SearchArtist />
            </div>
          </>
      }
    </div>

  )
}
