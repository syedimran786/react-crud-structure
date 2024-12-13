import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import EmployeeList from './components/EmployeeList'
import EmployeeDetails from './components/EmployeeDetails'
import UpdateEmployee from './components/UpdateEmployee'
import Login from './components/Login'
import Pnf from './components/Pnf'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addemp" element={<AddEmployee />} />
      <Route path="/emplist" element={<EmployeeList />} />
      <Route path="/updateemp" element={<UpdateEmployee />} />
      <Route path="/empdetails/:eid" element={<EmployeeDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Pnf/>} />

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
