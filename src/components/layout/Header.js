import React from 'react';
import PropTypes from 'prop-types';


const Header=(props)=> {
    //by using destructuring we can pull out the values like below then we dont need to use dot operator to access them
    const {branding}=props;
    return (
        <nav className="navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
               
            
            </div>
               
                
        
            
        </nav>
        //if we haven't used destructuring then we have to write props.name to access any props
        //we can directly include the style or write a variable to store all the properties and then pass it to the style attribute
        //Or we can import 'location of css file'; to use external css file
    )
}
//we can have default props that is when we don't pass any props inside ,then this value is set by defalut
Header.defaultProps={
    branding:'My Application'
};
Header.propTypes={
    branding:PropTypes.string.isRequired
}
export default Header;
