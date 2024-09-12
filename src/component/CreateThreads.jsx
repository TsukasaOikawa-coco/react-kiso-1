import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


export const CreateThreads = () => {
  return(
  <div>
    <h1>スレッド新規作成</h1>
    <form action='https://railway.bulletinboard.techtrain.dev' method='post'>
      <input type='text' placeholder='スレッドタイトル'></input>
      <input type='submit' value='作成'></input>
    </form>
    <Link to="/">home</Link>
  </div>
  )
}

export default CreateThreads