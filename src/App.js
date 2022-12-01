import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Procedure from './Components/Procedure';
import About from './Components/About';
import Register from './Components/Register';
//will be admin only
import Entries from './Components/Entries';

import {css} from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
    `;
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40} />
        :
        <>
          <Navbar />
          <Header />
          <Procedure />
          <About />
          <Register />
          <Entries />
        </>
      }
    </div>
  );
}

export default App;
