import React,{Component} from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import AddContact from './components/contacts/AddContact';
//to import bootstrap,the file is present inside node_modules folder
class App extends Component{
  render(){
    return (
      
      <Provider>
      <div className="App">
         
        <Header branding='Contact Manager' />
        <div className="container">
          <AddContact></AddContact>
        <Contacts/>
        </div>
        </div>
      </Provider>
    );
  }
}


export default App;


//we have to wrap everything returning inside the provider component