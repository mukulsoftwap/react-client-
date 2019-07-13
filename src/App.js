import './App.css'

import React, {Component} from 'react'

import {config} from './config/config';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users : [],
      changeData : ""
    }
    // this.getUserData();
  }

  // clickHandle(){
  //   this.setState({name : "Rahul"})
  // }

  // getUserData(){
  //   let url = "http://localhost:4000/";
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     this.makeAllDisable(data);
  //     this.setState({users : data})
  //   });
  // }

  // makeAllDisable(data){
  //   data.forEach(elem => {
  //     elem['isDisable'] = true;
  //   });
  // }

  // editUserData(id, data){
  //   let url = "http://localhost:4000/update/"+id;
  //   let that = this;
  //   fetch(url,{
  //     method : 'PUT',

  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',             
  //     },

  //     body: JSON.stringify({name : data})

  //   }).then(response => response.json())
  //   .then(data => {
  //     that.makeAllDisable(that.state.users);
  //     that.setState({users : that.state.users})
  //   });
  // }

  // enableEditMode(index){
  //   this.makeAllDisable(this.state.users);
  //   this.state.users[index]['isDisable'] = false;
  //   this.setState({users : this.state.users})
  // }

  // deleteUserData(id, index){
  //   let url = "http://localhost:4000/delete/"+id;
  //   fetch(url,{method : 'DELETE'})
  //   .then(response => response.json())
  //   .then(data => {
  //     this.state.users.splice(index, 1);
  //     this.setState({users : this.state.users})
  //   });
  // }

  // changeText(index, event){
  //   this.state.users[index].name = event.target.value;
  //   this.setState({users : this.state.users});
  // }

  // addUserData(data){

  // }

  // addNewRow(){
  //   this.state.users.push({name:'', isDisable : false});
  //   this.setState({users : this.state.users})
  // }

  render() {
    return (
      <div id="container">
        <header>
          <div className="width">
            <h1><a href="/">acceler</a></h1>
            <nav>
              <ul className="sf-menu dropdown">
                <li className="selected"><a href="index.html">Home</a>
                </li>
                <li><a className="has_submenu" href="examples.html">Examples</a>
                  <ul>
                    <li><a href="noslides.html">Static Text Page</a>
                    </li>
                    <li><a href="page.html">Static Frontpage</a>
                    </li>
                    <li><a href="#">Another link</a>
                    </li>
                  </ul>
                </li>
                <li><a href="three-column.html">Three Column</a>
                </li>
                <li><a className="has_submenu" href="#">Products</a>
                  <ul>
                    <li><a href="#">Product One</a>
                    </li>
                    <li><a href="#">Product Two</a>
                    </li>
                    <li><a href="#">Product Three</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      )
  }
}

export default App
