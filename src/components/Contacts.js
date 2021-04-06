import React, { Component } from 'react'
import Contact from './Contact';

 class Contacts extends Component {
   
        state={
            contacts:[
                {
                    id:1,
                    name:'srikanth',
                    mail:'nalumac@gmail.com',
                    number:'546452125'
                },
                {
                    id:2,
                    name:'srikanth1',
                    mail:'nalumac1@gmail.com',
                    number:'452125455'
                },
                {
                    id:3,
                    name:'srikanth3',
                    mail:'nalumac3@gmail.com',
                    number:'474842125'
                }
            ]
        }    
        
    render() {
       const {contacts}=this.state;
        return (
            <div>
                {contacts.map(a=>
                    <Contact key={a.id} name={a.name} mail={a.mail} number={a.number}/>
                )}
                
            </div>
        )
    }
}
export default Contacts;
//by using map function we map through all the items present 
