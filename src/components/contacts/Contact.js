import React, { Component } from 'react'; //here we are destructuring component from react so that use directly use component while using in class otherwise we have to use class a extends React.Component;
import PropTypes from 'prop-types';
import {Consumer} from '../../context';

class Contact extends Component {
    state={
        showContactInfo:true
    }
    onDeleteClick=(id,dispatch)=>{
        dispatch({type:'DELETE_CONTACT',payload:id})
     //   this.props.deleteClickHandler();
    }
    onShowClick=()=>{
        this.setState({
            showContactInfo:!this.state.showContactInfo
        });
    }
    render(props) {
        const {id,name,mail,number}=this.props.a;
        const {showContactInfo}=this.state;
      
        return (
            <Consumer>
                
                {value=>
                
                { 
                    const {dispatch}=value;
                    return(
                    <div className="card card-body mb-3">
                    <h2>{name} <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down" style={{cursor:'pointer'}}></i>
                    <i className="fas fa-times " style={{cursor:'pointer',color:'red',float:'right'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>
                    </h2>
                    
                    {showContactInfo?(<ul className="list-group">
                        <li className="list-group-item">Number:{number}</li>
                        <li className="list-group-item">Email:{mail}</li>
                    </ul>):null}
                    
                    
                </div>

                )}
                
                }

            </Consumer>
           
        )
    }
}
//we can even include proptypes inside class by using static propTypes={}
//In the above code we first stored showcontactinfo variable as true,and onclikcing the the icon it changes to false
//And by using the ternary operater,we can display the contacts details when the value of showcontactinfo variable is true
//By giving the style attribute of icons cursor to be pointer, the mouse pointer changes onmouuseover it
Contact.protoTypes={
    a:PropTypes.object.isRequired
  //  deleteClickHandler:PropTypes.func.isRequired
}
export default Contact;
//we have to export evertything that we do here in main app component to display this
//by const {a}=this.props; at a time we're accessing all the values 
//When we bind the this of the event handler to the component instance in the constructor,
// we can pass it as a callback without worrying about it losing its context.
//Arrow functions are exempt from this behavior because they use lexical 
//this binding which automatically binds them to the scope they are defined in.
//that means when we use arrow function instead of normal function we don't need to bind 'this' 
//state is immutable we can't directly manipulate it 


//if we want to change the state from another component,for example in above delting a contact just by,clicking on the button we get to 
// the function which points to the props ,which are actually passed through the state ,while passing props we give it function in that component whihc we want to change

