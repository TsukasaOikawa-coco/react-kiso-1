import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CreateThreads = () => {
  const [title, setTitle] = useState([]);
  
  const handleSubmit = async () => {
    await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',  //POST:APIへデータの送信、GET:APIからデータを取得
      headers: {'Content-Type': 'application/json'},  //リクエストボディがJSON形式であることを知らせる
      body: JSON.stringify({title}),  //{ title: 'ユーザーが入力したタイトル' }というオブジェクトをJSON文字列に変換し、その文字列をリクエストボディとして送信する。(inputのvalueと一致させる。)
  });
  };

  return(
  <div>
    <p>スレッド新規作成</p>
    <form onSubmit={handleSubmit}>  {/* onSubmitはフォーム送信時に呼ばれる関数を指定している。*/}
      <input 
        type='text' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder='スレッドタイトル'>  
        {/* 
        onChangeは入力フィールドの値が変更されたときに呼ばれる関数を指定する。
        e.target は、イベントが発生した要素を指す。((e)がないとこの要素の指定ができない。)
        e.target.value は、input フィールドの現在の値。
        placeholderはフォームにあらかじめ表示される文字を指定する。
        */}
      </input>
      <button type='submit'>作成</button>
    </form>
    <Link to="/">home</Link>
  </div>
  )
}

export default CreateThreads