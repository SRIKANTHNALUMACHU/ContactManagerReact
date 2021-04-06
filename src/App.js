import React,{Component} from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
//to import bootstrap,the file is present inside node_modules folder
class App extends Component{
  render(){
    return (
      
      
      <div className="App">
         
        <Header branding='Contact Manager' />
        <div className="container">
        <Contacts/>
        </div>
        
        
        
        
      </div>
    );
  }
}


export default App;
