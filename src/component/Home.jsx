import { useState,useEffect } from 'react';

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
    <ul>
      新着スレッド
      {threads.map(thread => (
        <li key={thread.id}>{thread.title}</li>
      ))}
    </ul>
  </div>
  );
};