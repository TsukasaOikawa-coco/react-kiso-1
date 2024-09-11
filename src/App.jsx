import { useState,useEffect } from 'react';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'

export const App = () => {
  return(
    <div>
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/threads/new">新着スレッド作成</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<NewThreads />} />
      </Routes>
    </div>
  );
}
const Home = () => {
  
  const [threads, SetThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then(res => res.json())
      .then(data => 
        SetThreads(data))
  },[])

  return(
  <div>
    <header>掲示板</header> 
    <Link className="btn">スレッドをたてる</Link>
    <ul>
      新着スレッド
      {threads.map((thread) => (
        <li key={thread.id}>{thread.title}</li>
      ))}
    </ul>
  </div>
  );
};