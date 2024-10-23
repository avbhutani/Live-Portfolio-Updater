import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()
    
  return (
    <div className='modify-section'>
        <h1>Modify</h1>
        <button onClick={()=> navigate('/edit/intro')}>Intro</button>
        <button onClick={()=> navigate('/edit/about')} >About</button>
        <button onClick={()=> navigate('/edit/experience')}>Experience</button>
        <button onClick={()=> navigate('/edit/education')}>Education</button>
        <button onClick={()=> navigate('/edit/achievements')}>Achievements</button>
    </div>
  )
}

export default Homepage
