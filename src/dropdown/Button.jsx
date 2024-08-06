import React from 'react'
import { Link } from 'react-router-dom'
import ".././dropdown/button.css"

export default function Button() {
  return (
    <>
      <Link to="signUp">
        <button className='btn'>Sign Up</button>
      </Link>  
    </>
  )
}
