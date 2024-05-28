/*
import axios from 'axios'

const connectFrontendWithBackend = () => {
  axios
    .post('http://localhost:8000/api/users/customize')
    .then(response => {
      console.log(response)
      console.log(response.data)
    })
    .catch(error => {
      console.error('There was an error!', error)
    })
}

connectFrontendWithBackend()
*/
// eslint-disable-next-line react/prop-types
const HomePage = ({ h1 }) => {
    console.log('h1', h1)
  return <div>{h1 ? <h1>{h1}</h1> : <h1>No title provided</h1>}</div>
}

export default HomePage
