import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
      
      {/* <Home /> */}
    </div>
  )
}

export default App
