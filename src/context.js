import React,{Component} from 'react';
const Context=React.createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter(contact=>contact.id !==action.payload)
            }
        default:
            return state;
    }
}
export class Provider extends Component{
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
        ],
        dispatch: action=>
            this.setState(state=>reducer(state,action))
        
    } 
render(){
    return(
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
}
}
export const Consumer=Context.Consumer;

//we created context here to have the single state where we can manage everything of this app

//payload is something we pass along with the action
//there we're using a switch case with action type it is according to the case passed