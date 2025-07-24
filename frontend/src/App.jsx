import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import cors from 'axios'

function App() {

  const [data, setData] = useState({})
  const [image, setImage] = useState()

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/', {
        withCredentials: true,
      })
      setData(response.data.randomQuote[0])
      console.log(response.data.randomQuote[0])

    } catch (error) {
      console.error('Error fetching data', error)
    }
  }




  useEffect(() => {
    fetchData()
    setImage('https://static.photos/nature/200x200/')
  }, [])




  return (
    <>
      <div>
        <p className='quote-text'>{data.quoteText}</p>
        <p className='quote-author'>{data.quoteAuthor}</p>

      </div>
      <img className='quote-image' src={image}></img>
      <p className='quote-id'>quote id: {data._id}</p>
    </>
  )
}

export default App
