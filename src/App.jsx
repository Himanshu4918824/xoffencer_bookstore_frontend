
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/userinterface/homepage/Homepage'
import Header from './components/userinterface/homepage/Header';
import BookCategoryDetails from './components/userinterface/bookcategorypage/BookCategoryDetails';
import BookDetailPage from './components/userinterface/bookdetailpage/BookDetailPage';
import DisplayCartDetail from './components/userinterface/mycart/DisplayCartDetail';

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Homepage/>} path='/'></Route>
          <Route element={<Header/>} path='/hed'></Route>

          <Route element={<BookCategoryDetails/>} path='/bookcategorydetails'></Route>
          <Route element={<BookDetailPage/>} path='/bookdetailpage'></Route>

          <Route element={<DisplayCartDetail/>} path='/cart'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
