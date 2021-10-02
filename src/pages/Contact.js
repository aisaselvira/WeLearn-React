import React from 'react'
import {Link} from 'react-router-dom'

import Avatar from '../components/Avatar'

function Contact() {
  return (
    <div>
      <Avatar />
      <Link to="/contact/detail-contact">Detail Contact</Link>
      <h1>Ini halaman contactss</h1>
    </div>
  )
}

export default Contact