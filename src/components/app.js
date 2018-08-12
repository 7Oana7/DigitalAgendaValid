import React, { Component } from 'react';
import  Header from './header';
import Content from './content';


export default class App extends Component {
  render() {
    return (
      <div className="home">

      { Header() }

      <div className="wrapper">
       <div className="monday"> { Content('Monday') } </div>
       <div className="tuesday"> { Content('Tuesday') } </div>
       <div className="wednesday"> { Content('Wednesday') } </div>
       <div className="thursday"> { Content('Thursday') } </div>
       <div className="friday"> { Content('Friday') } </div>
        <div className="saturday"> { Content('Saturday') } </div>
       <div className="sunday"> { Content('Sunday') } </div>
       </div>
         <div className="button-wrapper">
        <button className="button" > Done </button>
          </div>

         
          
      </div>
    );
  }
}
