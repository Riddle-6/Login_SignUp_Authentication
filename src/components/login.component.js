import React, { useState } from 'react'
import axios, { all } from "axios"

export default function Login() {

  const [allValues,setAllValues] = useState({
    email : '',
    password : ''
  })

  const changeHandler = (e) => {
    setAllValues(prevValues => {
      return {...prevValues,[e.target.name] : e.target.value}
    })

    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/login",allValues)
    .then(d => {
      console.log(d.data);
    })
    .catch(err => {
      console.log("err");
    }) 
  }
  
    return (
      <form>   
        <h3>Login</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id='email'
            name='email'
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
            name='password'
            className="form-control"
            placeholder="Enter password"
            onChange={changeHandler}
            value={allValues.password}

          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <p className="new-user text-right">
         <a href="/sign-up">New User?</a>
        </p>
      </form>
    )
}



































