import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <li key={thread.id}> <Link to="/threads/${threadId}">{thread.title}</Link></li>  
      ))}
    </ul>
    {/*
    .map() メソッドは、配列の各要素に対して関数を適用し、新しい配列を作成します。各スレッドオブジェクトに対して <li> 要素を作成する。
    key={thread.id}はReact に対して、リストアイテムが一意であることを伝えるための属性
    {thread.title}は各 <li> 内にスレッドのタイトルを表示する。thread.title はスレッドオブジェクトの title プロパティの値です。
    */}
  </div>
  );
};