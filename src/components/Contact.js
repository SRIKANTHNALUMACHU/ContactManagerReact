import React, { Component } from 'react'; //here we are destructuring component from react so that use directly use component while using in class otherwise we have to use class a extends React.Component;
import PropTypes from 'prop-types'

class Contact extends Component {
    render(props) {
        const {name,number,mail}=this.props;
        return (
            
            <div className="card card-body mb-3">
                <h2>{name}</h2>
                <ul className="list-group">
                    <li className="list-group-item">Number:{number}</li>
                    <li className="list-group-item">Email:{mail}</li>
                </ul>
                
            </div>
        )
    }
}
//we can even include proptypes inside class by using static propTypes={}
Contact.protoTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
}
export default Contact;
//we have to export evertything that we do here in main app component to display this
