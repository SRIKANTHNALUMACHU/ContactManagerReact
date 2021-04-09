import React, { Component } from 'react'

class AddContact extends Component {
    state={
        name:'',
        mail:'',
        number:''
    }
    onChange=e=>this.setState({[e.target.name]:e.target.value})
    render() {
        const {name,mail,number}=this.state;
        return (
            <div>
                <div className="card mb-">
                    <div className="card-header">
                        Add Contact
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input placeholder="Enter Name..." name="name" type="text" className="form-control form-control-lg"
                                value={name} onChange={this.onChange}></input>
                               
                            </div>
                            <div className="form-group">
                                
                                <label htmlFor="mail">Email</label>
                                <input placeholder="Enter Email..." name="mail" 
                                type="email" className="form-control form-control-lg" value={mail} onChange={this.onChange}></input>
                               
                            </div>
                            <div className="form-group">
                                
                                <label htmlFor="phone">Mobile Number</label>
                                <input placeholder="Enter Mobile No..." name="number" type="text" className="form-control form-control-lg" 
                                 value={number} onChange={this.onChange}></input>
                            </div>
                            <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AddContact;


//card mb-3 class create a div,like a card and having some margin
//card-heading gives a card with heading type
//card-body where we actually write the things to display 
//inside from ,we have form-group class(div) to make all the labels inside that form-group


//to dynamically change the values inside the state while typing ,we can use onChange ,like in the we pass onChange to every one the input 
//whenever it changes it also changes the value in the state correspondingly
//instead of write individual function to onChange different one of them , we can write single one by knowing the name attribute which we have to change
//i.e [e.target.name] it access the name attribue of target which is the input box and name attribute contains the value of the corresponding to state