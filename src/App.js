import logo from './logo.svg';
import './App.css';
import Mybutton from './button';
import Counter from './counter'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    counter:0
  }
  render(){
    return (   
        <div className="App">
        <header className="App-header" style={{background:'#fff'}}>
          <Counter counter={this.state.counter}/>
          <p>
            This is mine
          </p>
        <div style={{display:'flex',flexDirection:'row'}}>
          {this.state.counter > 0?
          <div>
            <Mybutton 
              title="- minus" 
              buttonColor="green"
              onButton={() => this.setState({
                counter:this.state.counter - 1
              })} 
            /> 
          </div>
          :
          <div>
            <Mybutton title= "+ plus" onButton={() => this.setState({counter:this.state.counter + 1})}/>
            </div> }
        </div>  
        </header>
      </div>
    )
  }
}
