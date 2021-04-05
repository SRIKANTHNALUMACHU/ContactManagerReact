import React,{Component} from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
class App extends Component{
  render(){
    return (
      
      <div className="App">
        <Header branding="Contact Manager"/>
        
        <Contact name="srikanth" number="1232433" mail="nalum@gmail.com"/>
      </div>
    );
  }
}

export default App;
