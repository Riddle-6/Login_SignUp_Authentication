import React, { Component , useState } from 'react'
import axios from 'axios'

export default function SignUp() {

const [allValues,setAllValues] = useState({
    fname : '',
    lname : '',
    email : '',
    password : ''
  })

  const changeHandler = (e) => {
    setAllValues(prevValues => {
      return {...prevValues,[e.target.name] : e.target.value}
    })
  }

  const handleClick =(e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/sign-up",allValues)
    .then(d => {
      console.log(d.data);
    })
    .catch(err => {
      console.log(err);
    }) 
  }
  
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            id='fname'
            name='fname'
            className="form-control"
            placeholder="First name"
            onChange={changeHandler}
            value={allValues.fname}

          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input 
            type="text" 
            id = 'lname' 
            name = 'lname' 
            className="form-control"  
            placeholder="Last name" 
            onChange={changeHandler} 
              value={allValues.lname}/>
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id = 'email'
            name = 'email'
            className="form-control"
            placeholder="Enter email"
            onChange={changeHandler}
            value={allValues.email}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            id = 'password'
            name = 'password'
            className="form-control"
            placeholder="Enter password"
            onChange={changeHandler}
            value={allValues.password}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Sign Up
          </button>
        </div>
        <p className="new-user text-right">
          Already registered <a href="/login"> Login?</a>
        </p>
      </form>
    )
  }