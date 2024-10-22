import {Component} from 'react';
import Menu from './menu';
import Form from './form';
import ApiExample from './ApiExample';
import UserList from './UserList';
class App extends Component{
  state={
    // users:[{
    //   userName:'Ramanan',
    //    password:'1234',
    //    userLog:'RamsCO'
    // }]
    users:[]
  }  
  removecharacter=(index)=>{
    const {users}=this.state
    let filtered=users.filter((users,i)=>{
    return i!==index
    });
    this.setState({users:filtered})
  }
  handleSubmit=(users)=>{
   this.setState({users:[users]})
  }
  render(){
      const {users}=this.state
      return(
      <div className='App'>
        <Menu removecharacter={this.removecharacter} usersData={users}/>
      <Form handleSubmit={this.handleSubmit}/>
     {/* <h4>Api Example</h4>
     <ApiExample/> */}
     <h4>Api Example 2</h4>
     <UserList/>
      </div>
      )
    
    }
  }
  export default App;