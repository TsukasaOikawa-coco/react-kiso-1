import { useState,useEffect } from 'react';
import './App.css';

export const NewThreads = () => {
  return(
  <div>
    <header>掲示板</header> 
    <a class="btn">スレッドをたてる</a>
    <p>
スレッド新規作成</p>
  </div>
  );
};

export default NewThreads;