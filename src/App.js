import './App.css';
import Header from './components/Header'
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Formheader from './components/Formheader'
import React from 'react';


const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/form/:id' element={<Formheader />} />
          <Route exact path='/' element={
            <React.Fragment>
              <Header />
              <Template />
              <Mainbody />
            </React.Fragment>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
