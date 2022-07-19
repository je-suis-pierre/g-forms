import './App.css';
import Header from './components/Header'
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Formheader from './components/Formheader'
import React from 'react';
import Centeredtabs from './components/Tabs';
import Question_form from './components/Question_form';


const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/form/:id' element={
            <React.Fragment>
              <Formheader />
              <Centeredtabs />
              <Question_form />
            </React.Fragment>
          } />
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
