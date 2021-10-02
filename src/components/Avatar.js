import React from 'react'
import '../App.css'

function Avatar() {
  const avatar = "https://th.bing.com/th/id/OIP.SSKlwaS7U_FZks7X_ERolAHaHa?pid=ImgDet&rs=1"
  return (
    <div>
      <img 
        src={avatar}
        alt="avatar"
        className="avatar"
      />
    </div>
  )
}

export default Avatar