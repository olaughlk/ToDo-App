import React, {Component} from 'react';
import firebase from 'firebase/app';
import {firebaseConfig} from './config'; //this is the configuration file for the database, requires API key
import 'firebase/database';
import './App.css';

import ToDo from './ToDo'
import EditBox from './EditBox'


//Created using create-react-app command line tool
//used default settings and built from that
class App extends Component{
  //constructor takes props, even though it does nothing with them
  //only done to keep consistency and for any future alterations
  constructor(props){
    super(props)

    //start with an empty array of notes, we will add to this in component will mount
    this.state = {
      todos: [
      ],
    }

    //all of our binding code for functions so they can access this.state
    this.addItem = this.addItem.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);


    //initializing two firebase paths, the first is more general for our deletion and updates
    //the second one makes adding components easier
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref().child('todos');
    
  }

  //React requires the use of UNSAFE_ for will mount method
  //I'm not entirely sure why but I didn't question is too much
  UNSAFE_componentWillMount(){

    //we start by copying our current list of ToDos, this is
    //because we can't edit state items directly and so 
    //we copy first and then use setState later
    const current = this.state.todos;

    //here we pull an item from the database in the form of a snapshot
    //we then push the new item to our array so that it appears on the 
    //screen. Then we update the state of our todos array
    this.database.on('child_added', snapshot => {
      current.push({
        id: snapshot.key,
        td: snapshot.val().td,
      })
      this.setState({td: current})
    })
  }

  //This function is called by the "add item" button in the EditBox
  //class. The function pushes the specified content to the database
  //The database will automatically create a key which we will use
  //as the item ID later on. this is helpful for deleting an editing
  //items
  addItem(item){
    this.database.push().set({
      td: item,
    })

    //I ran into a problem where if you were starting from a blank array
    //the page would not update even when the database was changed.
    //I realize this is not the most elegant solution, but with my limited
    //knowledge of react, I couldn't be more creative
    if(this.state.todos.length<2){
      window.location.reload(false);
    }

  }

  //The update function is used for making changes to ToDo items. It takes a
  //string "uId" which represents the ID to update, and a string "uTd" which
  //represents the content which we will be changing to.
  update(uId, uTd){

    //this first if checks if the field is empty, if it is, we call the delete
    //function and the item is removed from the array, otherwise we update 
    //accordingly
    if(uTd===''){
      this.delete(uId);
    }else{
      //Again we create a copy of the "todos" array to make updating the state
      //easier
      var current = this.state.todos.slice();

      //here, we go through the list to find the item with the appropriate ID
      //and then appropriately update the content of that item. after updating
      //we break the loop to avoid unnecessary code
      for(var i=0;i<current.length;i++){
        if(current[i].id===uId){
          current[i].td=uTd;
          break;
        }
      }
      //we then update our local array to make the change occur faster.
      this.setState({
        todos: current,
      })
      //here we push the update to the database using the  update() 
      //function in react. I found the format for this code in the
      //firebase/react documentation and since this was my first time
      // using the language, I couldn't improve much from there
      const updates = {};
      if(uTd===null){
        updates['/todos/' + uId] = null;
      }
      else{
        updates['/todos/' + uId] = {id: uId, td: uTd};
      }
      this.app.database().ref().update(updates);
    }
  }

  //The delete function works incredibly similar to the update
  //function so I will only highlite the differences
  delete(uId){
    var current = this.state.todos.slice();
    for(var i=0;i<current.length;i++){
      if(current[i].id===uId){
        //here, we remove the item from our local array so that there are no
        //differences between it and the database
        current.splice(i,1);
        break;
      }
    }
    this.setState({
      todos: current,
    })

    //here we update the variable once again, but instead of updating it to
    //a new value, we update it to null, which removes it from the database
    //there is a remove function for firebase, but the documentation recommended
    //this method
    const updates = {};
    updates['/todos/' + uId] = null;
    this.app.database().ref().update(updates);

  }

  //this render method determined what we see when the page is loaded
  //and whenever somthing is updated
  render(){
    return (
        <div className="Main">
          <header><h1>To Do List</h1></header>
          <div>{
            //this is essentially a really weird way of going through 
            //the array and outputting properly formatted items
            //we call the render method in the ToDo class which contains
            //the formatting
          this.state.todos.map((tod) => {
            return (
              <ToDo td={tod.td} id={tod.id} key={tod.id} update={this.update} delete={this.delete}/>
            )}
          )}
          {
            //this next line calls the ExitBox render function to properly 
            //format the input box below all the todo items
          }
          <EditBox addItem={this.addItem} />
          </div>
        </div>
    );
  }
}


//this exports all the functions so it could be called by another class
export default App;
