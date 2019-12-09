import React from 'react'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router';
import logo from '../images/logo.png';
import logOutLogo from '../images/logOutIcon.png';
import downArrow from '../images/downArrow.png'
// import downArrow2 from '../images/angle-down-solid.svg'
import Login from './Login'

export default function Header(props) {
  return (
    <header>
      <nav>
        {/* -------------------- APP LOGO -------------------- */}
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>

        {/* ------------------------ LOG OUT LOGO -------------------- */}
        {props.currentUser &&
          <Link to="/"><img className="logOutLogo" src={logOutLogo} onClick={props.handleLogout}>
          </img>
          </Link>
        }
      </nav>
 {/* -------------- Greeting when user logged in -------------------- */}
 <div className="greeting">
        {props.currentUser ?
          <>
            <p>Hello&nbsp;{props.currentUser.username}!</p>
          </>
          :
          <></>}
      </div>

      {/* ---------- BIBLE VERSE SECTION -------------------------------- */}
      <div className="bible-container-wrapper">
        <div className="bible-container">
          {props.verse &&
            <>
            <div className="bible-verse">
              <h1>{props.verse.quote}</h1>
              <p>-&nbsp;{props.verse.location}&nbsp;-</p>
            </div>
            <br />
            <button onClick={props.refreshQuote}>Get Quote</button>
            </>
          }
          </div>
      </div>

      {/* ------------------ Conditional Render for Log-In/ Register----------- */}
      {
        props.currentUser
          ?
          <>
          </>
          :
          <>
            {props.login &&
              <div className="auth-container">
              {props.formData &&
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
                <button onClick={props.toggleLogin}>Register</button>
                </form>
              }
              </div>}

            {!props.login &&
              <div className="auth-container">
              {props.formData &&
                <form onSubmit={props.handleRegister} >
                  <p>Username:</p>
                  <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
                  <p>Email:</p>
                  <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
                  <p>Password:</p>
                  <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
                  <button>Register</button>
                </form>
              }
              </div>
            }
          </>
      }
      {props.currentUser &&
        <a href='#giftList'><img className="downArrow" src={downArrow}></img></a>
      }

    </header>
  )
}