import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "./component/Home";
import { CreateThreads } from "./component/CreateThreads";
import { ThreadContents } from "./component/ThreadContents";

const App = () => {

  return(
    <Router>
      <div>
        <header>掲示板</header>
        <nav>
          <Link to="/threads/new">スレッドをたてる</Link>
          {/*
          /threads/newへ移行する。
          */}
        </nav>
        <Routes> 
          <Route path='/' element={<Home/>}></Route>
          <Route path='/threads/new' element={<CreateThreads/>}></Route>
          <Route path='/threads/:threadId' element={<ThreadContents/>}></Route>
          {/*
          URLパスに応じてコンポーネントを表示する。path='/'のときHomeコンポーネントを表示する。
          */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;