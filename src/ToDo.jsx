import React, { Component } from 'react';
import './ToDo.css';


//This class does a few thing, first and most importantly
//it allows us to display our current items. We also have
//update and delete methods that do about what you'd expect
class ToDo extends Component{
    //we use our props here to import the update and delete
    //functions as well as the information regarding the ID
    //and content of our item
    constructor(props){
        super(props);
        this.state = {
            td: props.td,
            id: props.id,
        }

        //binding methods as always
        this.update = this.update.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.delete = this.delete.bind(this);
    }

    //Since I decided to make each todo item a text area to make
    //updating easier, I need an input listener that updates the 
    //content of the item to whatever is typed in the box
    //please note that this will not update the database until
    //the "update" button is clicked
    handleInput(e){
        this.setState({
            td: e.target.value,
        })
    }

    //Simply calls the update function as described in "App.js"
    update(){
        this.props.update(this.state.id, this.state.td);
    }
    
    //Simply calls the delete function as described in "App.js"
    delete(){
        this.props.delete(this.state.id);
    }


    //The Render function creates the text area for the todo, the
    //update button, and the delete button. To view their formatting
    //you can take a look at ToDo.css or just look at the app
    render(){
        return(
            <div className='TodoArea'>
                <textarea className='TodoBox' id="TodoBox" defaultValue={this.state.td} onChange={this.handleInput}/>
                <button className='editButton' onClick={this.update}>update</button>
                <button className='deleteButton' onClick={this.delete}>delete</button>
            </div>
        )
    }
}

//export so that we can import from App.js
export default ToDo;