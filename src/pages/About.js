import React from 'react'
import {useParams} from 'react-router-dom'

function About() {
  let {id} = useParams();
  return (
    <div>
      <h1>ini halaman {id} asd</h1>
    </div>
  )
}

export default About