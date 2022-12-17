import React from 'react'
import { Button } from '../Button/index.js'
import('./index.css')


export const LogoutButton = () => {
    let token = ""
    const logout = () => {
        window.localStorage.removeItem('token')
        window.location.reload()
    }
    return (
        token,
        <div className='logout-button'
        ><Button
                onClick={logout}
                label="Logout"
                color="Red" />
        </div>
    )
}
