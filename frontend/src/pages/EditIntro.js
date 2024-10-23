import './EditIntro.css'
import { useState,React, useEffect} from 'react'
import axios from 'axios'
const EditIntro = () => {
  const [introTitle,setIntroTitle] = useState('')
  const [introHeadline,setIntroHeadline] = useState('')
  const [introContent,setIntroContent] = useState('')
  const [buttonText,setButtonText] = useState('')

  async function fetchIntroData() {
    console.log('Executed2')
    try{
      const res = await axios.get('http://localhost:4000/api/fetch/intro');
      if(res)
    {  
      setIntroTitle(res.data.introTitle || '')
      setIntroHeadline(res.data.introHeadline || '')
      setIntroContent(res.data.introContent || '')
      setButtonText(res.data.buttonText || '')
    }
      console.log(res)
    }
    catch(error) {

    }
  }
    
  useEffect(()=> {
    console.log('Executed')
    fetchIntroData()
  },[])

  async function handleClick(e) {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:4000/api/update/intro', {
        introTitle,
        introHeadline,
        introContent,
        buttonText
      })
      console.log(res)
      console.log('Updated')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='portfolio-intro'>
      <h1>Edit Portfolio Introduction</h1>
      <form className='portfolio-intro-form'>
        <input type="text" value={introTitle} id='introTitle' onChange={(e)=> setIntroTitle(e.target.value)} placeholder='Write Intro Title' />
        <input type="text" value={introHeadline} onChange={(e)=> setIntroHeadline(e.target.value)} placeholder='Write Intro Headline' />
        <textarea value={introContent} onChange={(e)=> setIntroContent(e.target.value)} placeholder='Write Intro Content' />
        <input type="text" value={buttonText} onChange={(e)=> setButtonText(e.target.value)} placeholder='Button Text Change?'/>
        <button type='submit' onClick={handleClick}>Update Details</button>
      </form>
    </div>
  )
}

export default EditIntro
