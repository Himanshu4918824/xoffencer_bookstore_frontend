
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/userinterface/homepage/Homepage'
import Header from './components/userinterface/homepage/Header';
import BookCategoryDetails from './components/userinterface/bookcategorypage/BookCategoryDetails';

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Homepage/>} path='/'></Route>
          <Route element={<Header/>} path='/hed'></Route>

          <Route element={<BookCategoryDetails/>} path='/bookcategorydetails'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
