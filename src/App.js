import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/header'
import Navber from './component/navbar'
import Sidebar from './component/sidebar'
import Home from './component/Home'
import Register from './component/Register'
import AddData from './component/AddData';
function App() {
  
  return (
    // <div className="App">
    //   <div className="alert alert-success" role="alert">
    //     <h1>Welcome to SELECT * FARM</h1>
    //   </div>
    //   <div className="container">
    //     <div></div>
    //   </div>
    // </div>
    <div >
      <Header />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/Register'><Register /></Route>
        </Switch>
      </BrowserRouter> */}
      <BrowserRouter>
     
          <Navber />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <Sidebar />
              </div>

              <div className="col-sm-8">
                <div className="container" style={{ marginTop: 30 }}>

                  <Route exact path='/'><Home /></Route>
                  <Route path='/AddData'><AddData /></Route>


                  <h2>TITLE HEADING</h2>
                  <h5>Title description, Dec 7, 2017</h5>
                  <div className="fakeimg">Fake Image</div>
                  <p>Some text..</p>
                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <br />
                  <h2>TITLE HEADING</h2>
                  <h5>Title description, Sep 2, 2017</h5>
                  <div className="fakeimg">Fake Image</div>
                  <p>Some text..</p>
                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
              </div>
            </div>
          </div>
      </BrowserRouter>
      <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
        <p>Footer</p>
      </div>

    </div >


  );
}

export default App;
