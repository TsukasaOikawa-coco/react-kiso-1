import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "./component/Home";
import { CreateThreads } from "./component/CreateThreads";

const App = () => {
  return(
    <div>
      <Router>
        <nav>
          <Link to="/threads/new">新着スレッド作成</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/threads/new' element={<CreateThreads />} />
        </Routes>        
      </Router>
    </div>
  );
};

export default App;