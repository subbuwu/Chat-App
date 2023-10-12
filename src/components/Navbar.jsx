import React from 'react'
import { FaReact } from "react-icons/fa"
import { BiLogoFirebase } from "react-icons/bi"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <p>Self Built by <a target='__blank' href="https://linktr.ee/subbuwu"><span className='nav_text'>Subbu</span></a> 💻 , Powered with <a target='__blank' href="https://react.dev/"><FaReact className='icons'/></a> and <a target='__blank' href="https://firebase.google.com"><BiLogoFirebase className='icons'/></a></p>
    </div>
  )
}

export default Navbar