import React from 'react'

function StudentInfo({student, status, description}) {
  return (
    <div>
      <h1>{student}</h1>
      <h3>{status}</h3>
      <p>{description}</p>
    </div>
  )
}

export default StudentInfo