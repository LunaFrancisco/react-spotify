import React from 'react'
import('./index.css')
export const Button = (props) => {
  return (
    <div>
      <a href={() => false} className={`Button ${props.color}`} onClick={props.onClick}> {props.label} </a>
    </div>
  )
}
