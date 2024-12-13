import React, { useState } from 'react'
import "./CSS/AddEmployee.css"

function AddEmployee() {

    let [edata,setedata]=useState({name:"",email:"",age:"",password:"",role:""});

    let changeEdata=({target:{name,value}})=>
    {
        setedata({...edata,[name]:value})
    }

    let addEmployee=(e)=>
        {
            e.preventDefault();
        }
    

  return (
    <form className='addemp' onSubmit={addEmployee}>
        <h1>Employee Registration Form</h1>
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
        <button className='btn btn-add' type='submit'>Add</button>
      </div>
    </form>
  )
}

export default AddEmployee
