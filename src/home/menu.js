import React,{ Component } from "react";

const TableHeader = ()=>{
    return(<thead>
            <tr>
            <th>Login</th>
            </tr>
        </thead>)
}
const TableBody = (props)=>{
const {usersData,removecharacter}=props
const rows=usersData.map((users,index)=>{
    return(<td key={index}>{users.userName}</td>)
})
const rows2=usersData.map((users,index)=>{
    return(<td key={index}>{users.password}</td>)
})
const rows3=usersData.map((users,index)=>{
    return(<td key={index}>{users.userLog}</td>)
})
const rows4=usersData.map((users,index)=>{
    return(<td key={index}><button onClick={()=>removecharacter(index)}>Clear</button></td>)
})
return(<tbody>
    <tr><td>UserName : </td>{rows}</tr>
    <tr><td>Password : </td>{rows2}</tr>
    <tr><td>UserLog  : </td>{rows3}</tr>
    <tr>{rows4}</tr>
     </tbody>)
}
const TableFooter = ()=>{
    return(<tfoot>
        <tr>
        <th>Sales Management System</th>
        </tr>
    </tfoot>)
}  
class Menu extends Component{
    render(){
        const {usersData,removecharacter}=this.props
        return(
            <table>
                <TableHeader/>
                <TableBody removecharacter={removecharacter} usersData={usersData}/>
                <TableFooter/>
            </table>
        )
    }
}
export default Menu;