import React, { useState } from 'react'
import "./CSS/UpdateEmployee.css"

function UpdateEmployee() {

    let [edata,setedata]=useState({name:"",email:"",age:"",password:"",role:""});

    let changeEdata=({target:{name,value}})=>
    {
        setedata({...edata,[name]:value})
    }

    let updateEmployee=(e)=>
        {
            e.preventDefault();
        }
    

  return (
    <form className='updateemp' onSubmit={updateEmployee}>
        <h1>Employee Updation Form</h1>
      <div>
        <input type="text" placeholder='Fullname' name="name" onChange={changeEdata}/>
      </div>
      <div>
        <input type="email" placeholder='Email' name="email" onChange={changeEdata}/>
      </div>
      <div>
        <input type="text"  placeholder='Age' name="age" onChange={changeEdata}/>
      </div>
      <div>
        <input type="password"  placeholder='Password' name="password" onChange={changeEdata}/>
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id='role'>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
      </div>
      <div>
        <button className='btn btn-update-form' type='submit'>Update</button>
      </div>
    </form>
  )
}

export default UpdateEmployee
