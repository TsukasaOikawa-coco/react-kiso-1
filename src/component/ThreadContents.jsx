import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const ThreadContents = () => {
  const [contents, setContents] = useState([]);
  const [newPost, setNewpost] = useState([])
  const { threadId } = useParams();

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads/${threadId}/')
      .then(res => res.json())
      .then(data => 
        setContents(data))
  },[threadId])

    
  const handleSubmit = async () => {
    await fetch('https://railway.bulletinboard.techtrain.dev/threads/${threadId}/', {
      method: 'POST',  //POST:APIへデータの送信、GET:APIからデータを取得
      headers: {'Content-Type': 'application/json'},  //リクエストボディがJSON形式であることを知らせる
      body: JSON.stringify({post:newPost}),  //{ title: 'ユーザーが入力したタイトル' }というオブジェクトをJSON文字列に変換し、その文字列をリクエストボディとして送信する。(inputのvalueと一致させる。)
    });
    };
  
  return(
  <div>
    <p>投稿一覧</p>
    <ul>
      {contents.map(content => (
        <li key={content.id}> {content.post}</li>  
      ))}
    </ul>
    <form onSubmit={handleSubmit}>  {/* onSubmitはフォーム送信時に呼ばれる関数を指定している。*/}
      <input 
        type='text' 
        value={newPost} 
        onChange={(e) => setNewpost(e.target.value)}
        placeholder='投稿内容'>  
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

export default ThreadContents