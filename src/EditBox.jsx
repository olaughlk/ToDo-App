import React, {Component} from 'react';
import './EditBox.css';

//The edit box class is the class where you can input data and save it
//to the database, it's relatively simple as it only has two functions
//and a render method, but i'll higlight what I think is important
class EditBox extends Component{
    //here the props are actually important, although it looks like we 
    //don't use them, laten when we call "this.props.addItem()" we are
    //referencing the props function we passed from the App.js file
    constructor(props){
        super(props);
        //here we create an empty content string in the state
        //we also bind all the functions to the class so that
        //we can use 'this' call
        this.state={content: ''};
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    //here all we do is add the value of the input field to
    //the content string
    handleInput(e){
            this.setState({content: e.target.value,})
    }

    //this is how we add a todo item
    addItem(){
        //this chacks whether the string is empty
        //we don't want empty todo items so I won't
        //let users input them
        if(this.state.content !==''){
            this.props.addItem(this.state.content);
        this.setState({
            //we reset the content string otherwise we
            //would never be able to add new notes from
            //scratch
            content: '',
        })
        }
    }


    //I'm not going to go into the CSS here, but this just formats our output
    //We send the field as an input box and the button to add
    render(){
        return(
            <div className='EditArea'>
                <input className='EditBox' placeholder='Enter To Do Item' value= {this.state.content} onChange={this.handleInput}/>
                <button className='addButton' onClick= {this.addItem}>Add Item</button>
            </div>
        )
    }
}

export default EditBox;