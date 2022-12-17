
import React, { useEffect, useState } from 'react'
import logotipo from '../../spotifyAssets/Spotify_Logo_RGB_Green.png'
import('./login.css')

export const Login = () => {
  const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT
  const REDIRECT_URI = process.env.REACT_APP_AUTH_REDIRECT_URI
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token);
    }
    setToken(token)
  }, [])

  return (
    <div className="login-content">
      <div>
        <img alt="" src={logotipo} className="logo" />
      </div>
      <div>
        {!token ? <a className="login-button" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE} `} >login to spotify</a>
          : ""}
      </div>
    </div>
  )
}
