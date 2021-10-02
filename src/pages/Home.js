import React from 'react'
import Avatar from '../components/Avatar'
import StudentInfo from '../components/StudentInfo'

import '../App.css'

function home() {
  return (
    <div>
      <div className="containerStudent">
        <Avatar />
        <StudentInfo 
          student={"samsung"} 
          status={"Student Bootcamp"} 
          description={"Suka belajar coding"}  
        />
      </div>

    </div>
  )
}

export default home