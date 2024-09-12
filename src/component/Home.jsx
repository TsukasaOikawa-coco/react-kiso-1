import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'

export const Home = () => {
 
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then(res => res.json())
      .then(data => 
        setThreads(data))
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