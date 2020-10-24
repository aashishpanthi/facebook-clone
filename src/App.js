import React from 'react';
import Login from './Login'
import Header from './comp/Header'
import Sidebar from './comp/Sidebar'
import Feed from './comp/Feed'
import Widget from './comp/Widget'
import { useStateValue } from './StateProvider'
import './App.css';

function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
          <Login />
        ):(
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Feed />
            </div>
          </>
        )
    }
    </div>
  );
}

export default App;
