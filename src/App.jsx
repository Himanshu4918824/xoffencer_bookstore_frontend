
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/userinterface/homepage/Homepage'
import Header from './components/userinterface/homepage/Header';

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Homepage/>} path='/'></Route>
          <Route element={<Header/>} path='/hed'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
