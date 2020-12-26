
import React, { Component } from 'react'
import { Route,  BrowserRouter, Switch, Link} from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage'
import Favourite from './components/favourites'
class App extends Component{
  

  
  
  render() {
    
   
    
    


    
    return (
      <BrowserRouter>
      <div className="App">
        {/* <h1>Welcome Dear Frensss...!!!</h1> */}
        <nav className="navBar">
          <div>
            <Link to="/" className="navLink">Homepage</Link>
            <Link to="/Favourite" className="navLink">Favourites</Link>
          </div>
        </nav>
        <div className="logoWrapper">
        <img src="https://cdn130.picsart.com/300253449015211.png" className="sunLogo" alt="Sun"/>
        </div>

        <p className='descContent'>*RULES*<br></br>
                                   <br></br>
                                   Please scroll down and click on any planets card at HOME to add them in your favourites list. <br></br>
                                   <br></br>
                                   To check your favourites list please click on the FAVOURITES.<br></br>
                                   <br></br>
                                   THANK YOU</p>      
        <div className="mainWrapper">
          {/* {renderedPlanet} */}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Favourite" component={Favourite} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
