
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPageComponent from './MainPageComponent/MainPageComponent';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
      </Routes>
    </Router>
  )
}

export default App
