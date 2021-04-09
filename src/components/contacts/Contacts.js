import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../../context';

 class Contacts extends Component {
   
       
       /*  deleteContact=(id)=>
        {
            const {contacts}=this.state;
            const newContact=contacts.filter(contact=>contact.id!=id);
            this.setState({
                contacts:newContact
            })
        }   */
        render(){
            return(
                <Consumer>
                    {value=>{
                        const {contacts}=value;
                        return(
                        

                            <React.Fragment>
                {contacts.map(a=>
                    <Contact key={a.id} a={a} />
                )}
                
            </React.Fragment>
                        )
                    }}
                </Consumer>
            )
        } 
        
  
}
export default Contacts;
//by using map function we map through all the items present 
//We can use React Fragments instead of divs,where we don't need any class attribute for a div,it is best to make it div


//deleting contact
//we want to deal with the id of the contacts to delete them ,so we pass id as parameter
//if we want to delete  a particular contact with id,store the contacts without the id in variable by using filter 
//then passing it to the original state using this.setState()

//now the whole state is moved to context.js
