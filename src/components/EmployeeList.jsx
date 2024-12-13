import React, { useState } from 'react'
import "./CSS/EmployeeList.css"

function EmployeeList() {

    let [employees,setemployees]=useState([])
  return (
    <table>
        <thead>
            <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
              
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Jhon</td>
                <td>Jhon@gmail.com</td>
                <td>
                    <button className='btn btn-view'>View</button>
                </td>
                <td>
                    <button className='btn btn-update'>Update</button>
                </td>
                <td>
                    <button className='btn btn-delete'>Delete</button>
                </td>
            </tr>
            <tr>
                <td>Sl No</td>
                <td>Name</td>
                <td>Email</td>
                <td>
                    <button className='btn btn-view'>View</button>
                </td>
                <td>
                    <button className='btn btn-update'>Update</button>
                </td>
                <td>
                    <button className='btn btn-delete'>Delete</button>
                </td>
            </tr>
            <tr>
                <td>Sl No</td>
                <td>Name</td>
                <td>Email</td>
                <td>
                    <button className='btn btn-view'>View</button>
                </td>
                <td>
                    <button className='btn btn-update'>Update</button>
                </td>
                <td>
                    <button className='btn btn-delete'>Delete</button>
                </td>
            </tr>
        </tbody>
        
    </table>
  )
}

export default EmployeeList
