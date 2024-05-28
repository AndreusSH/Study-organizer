import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomePage from './HomePage'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const BuildHomePage = () => {
  const [target, setTarget] = useState({
    h1: 'Title'
  })

  const navigate = useNavigate() // Get the navigate function

  const handleInputChange = (event) => {
    setTarget({
      h1: event.target.value // Update h1 property with the new value
    })
  }
  const handleClick = () => {
    console.log('target h1', target.h1) // Log the target.h1 value
    axios.post('http://localhost:8000/api/users/customize', target)
    .then(response => {
        console.log('response from backend is', response.data)
        navigate('/', { state: { h1: target.h1 } }) // Pass h1 value as state

    }).catch(error => {
        console.error(error)
    })
  }

  return (
    <div>
      <HomePage h1={target.h1} />
      <label htmlFor='h1Input'>Title:</label>
      <input
        type='text'
        id='h1Input'
        value={target.h1}
        onChange={handleInputChange}
      />
      <Button
        variant='outline-success'
        onClick={handleClick}
      >
        Modifica
      </Button>
    </div>
  )
}

export default BuildHomePage
