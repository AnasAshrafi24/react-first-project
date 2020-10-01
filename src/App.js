import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import BasicTextFields from './components/Text'
import Navbar from './components/Navbar';
import GridList from './components/GridList';



class App extends Component {
  render() {
    return(
      <div style={{backgroundColor:'#5f8a6a'}}>
        <Navbar/>
        <Header/>
       
     
         
        <BasicTextFields/>
        <GridList/>
        <Footer/>
      </div>
    )
  }
}

export default App;
