import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "./component/Home";
import { CreateThreads } from "./component/CreateThreads";

const App = () => {
  
  const [threads, setThreads] = useState([])
  const addThread = (newThread) => {
    setThreads([...threads, newThread]);
  };

  return(
    <Router>
      <div>
        <header>掲示板</header>
        <nav>
          <Link to="/threads/new">スレッドをたてる</Link> 
        </nav>
        <Routes>
          <Route path='/' element={<Home threads={threads} />} />
          <Route path='/threads/new' element={<CreateThreads addThread={addThread} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;