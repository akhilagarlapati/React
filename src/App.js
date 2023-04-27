import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet name="akhi" >
        <p>She is soo intelligent</p>
          </Greet>
        <Greet name="Shivani" />
         <Welcome name="akhi" > 
          <p>She is a super lady</p> 
          </Welcome>
      </div>
    );
  }
 }
  
export default App;
