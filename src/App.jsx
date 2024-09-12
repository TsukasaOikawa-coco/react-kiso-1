import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "./component/Home";
import { CreateThreads } from "./component/CreateThreads";

const App = () => {
  return(
    <Router>
      <div>
        <header>掲示板</header>
        <nav>
          <Link to="/threads/new">スレッドをたてる</Link> 
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/threads/new' element={<CreateThreads />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;