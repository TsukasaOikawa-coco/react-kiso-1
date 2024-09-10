import { useState,useEffect } from 'react';
import './App.css';

export const App = () => {
  const [threads, SetThreads] = useState([]);
  
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then(res => res.json())
      .then(data => {
        SetThreads(data);
        console.log(data);
      })
  },[])
  return(
  <div>
    <header>掲示板</header>
    <ul>
      新着スレッド
      {threads.map((thread) => (
        <li key={thread.id}>{thread.title}</li>
      ))}
    </ul>
  </div>
  );
};