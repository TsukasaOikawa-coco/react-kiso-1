import { useState,useEffect } from 'react';
import './App.css';

export const App = () => {
  const [threads, SetThreads] = useState([]);
  
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/thread')
      .then(res => res.json())
      .then(data => SetThreads(data.message)) 
  },[])
  return(
  <div>
    <header>新着スレッド</header>
    <ul>
        {threads.map((thread, index) => (
          <li key={index}> {threads} </li>
        ))}
    </ul>
  </div>
  );
};