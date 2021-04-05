import React, { Component } from 'react'; //here we are destructuring component from react so that use directly use component while using in class otherwise we have to use class a extends React.Component;
class Contact extends Component {
    render(props) {
        const {name,number,mail}=this.props;
        return (
            
            <div>
                <h2>{name}</h2>
                <ul>
                    <li>Number:{number}</li>
                    <li>Email:{mail}</li>
                </ul>
                
            </div>
        )
    }
}
export default Contact;
//we have to import evertything that we do here in main app component to display this
