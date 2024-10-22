import React,{ Component } from "react";

class From extends Component{
initialState={
    userName:"",
    password:"",
    userLog:""
}
state=this.initialState;
handleChange=(event)=>{
    console.log(event.target.value);
    const {name,value}=event.target
    this.setState({[name]:[value]})
}
submitForm=()=>{
    console.log("Submited");
    console.log(this.state);
    let users=this.state
    this.props.handleSubmit(users)
    this.setState(this.initialState);
}
render(){
    return(
        <form>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" id="userName" value={this.state.userName} onChange={this.handleChange}/><br/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" value={this.state.password}  onChange={this.handleChange}/><br/>
            <label htmlFor="userLog">User Log</label>
            <input type="text" name="userLog" id="userLog" value={this.state.userLog}  onChange={this.handleChange}/><br/>
            <input type="button" value="Submit" onClick={this.submitForm}/>
        </form>
    )
}
}
export default From;