import { useLocation } from 'react-router-dom'
import HomePage from './HomePage'

const Home = () => {
  const location = useLocation()
  const { h1 } = location.state || { h1: 'Default Title' } // Fallback to default if state is not provided

  return (
    <div>
      <HomePage h1={h1} />
    </div>
  )
}

export default Home