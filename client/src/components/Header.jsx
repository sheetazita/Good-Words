import React from 'react'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router';
import logo from '../images/logo.png';
import accountLogo from '../images/accountLogo.png'
import Login from './Login'

export default function Header(props) {
  return (
    <header>
{/***************************** LOGO ********************************************/}
      <Link to="/"><img className="logo" src={logo} /></Link>
      
{/***************************** BIBLE VERSE SECTION ********************************************/}
      <div className="bible-container">
        {props.verse &&
          <>
            <h1>{props.verse.quote}</h1>
            <p>-&nbsp;{props.verse.location}&nbsp;-</p>
            <button onClick={props.refreshQuote}>Get Quote</button>
          </>
        }
      </div>
{/***************************** Conditional Render for Log-In/Log-Out ********************************************/}
      <div>
        {props.currentUser ?
          <>
            <p>Hello {props.currentUser.username}!</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <></>}
      </div>
      {/********* Conditional Render for Log-In / Register ********************************************/}

        <div className="auth-container">
          <h2>Login</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            props.handleLogin();
          }}>
            <p>Username:</p>
            <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
            <p>Password:</p>
            <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
            <button>Login</button><br />
            <p>Don't have an account?</p><br />
            <Link to="/register">Register</Link>
          </form>
        </div>

      

        <div className="auth-container">
          <h2>Register</h2>
          <form onSubmit={props.handleRegister} >
            <p>Username:</p>
            <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
            <p>Email:</p>
            <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
            <p>Password:</p>
            <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
            <button>Register</button>
          </form>
        </div>

{/***************************** LOG IN FORM ********************************************/}
    
{/***************************** REGISTER FORM ********************************************/}

    </header>
  )
}