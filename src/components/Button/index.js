import React from 'react'
import('./index.css')
export const Button = (props) => {
  return (
    <div>
      <a className={`Button ${props.color}`} onClick={props.onClick}> {props.label} </a>
    </div>
  )
}
