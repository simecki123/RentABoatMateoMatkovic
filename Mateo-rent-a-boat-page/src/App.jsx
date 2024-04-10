
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPageComponent from './MainPageComponent/MainPageComponent';
import TermsOfUsePage from './Terms-Of-Use-page/TermsOfUsePage';
import PrivateTours from './PrivateTours/PrivateTours';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
        <Route path='/termsOfUse' element={<TermsOfUsePage />} />
        <Route path='/privateTours' element={<PrivateTours />} />
      </Routes>
    </Router>
  )
}

export default App
