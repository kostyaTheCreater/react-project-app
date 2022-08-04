import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NaviBar  from './Components/Navibar';
import { BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom';

import {Home} from './Home';
import Notes from './Notes';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/notes' element={<Notes />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
