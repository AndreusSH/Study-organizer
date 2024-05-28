import './App.css';
import BuildHomePage from './views/BuildHomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
function App() {

  return (
    <Router>
    <Routes>
      <Route path='/customize' element={<BuildHomePage />} />
      <Route path='/' element={<Home />} />

    </Routes>
  </Router>
  );
}

export default App;
