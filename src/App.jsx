import React from 'react'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import './index.css';

const App = () => {
  return (
       <BrowserRouter> 
      <Routes>
         <Route path = "/" element = {<Home />} />
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App