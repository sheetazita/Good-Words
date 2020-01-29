import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router';
import logo from '../images/logo.png';
import logOutLogo from '../images/logOutIcon.png';
import accountLogo from '../images/accountLogo.png';
import downArrow from '../images/downArrow.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  refreshPage = () => {
    window.location.reload(true);
  }

  handleOpenModal = () => {
    this.setState({
      modal: true
    })
  }

  exitModal = () => {
    this.setState({
      modal: false
    })
    this.refreshPage();
  }

  render() {
    return (
      <header>
        <nav>
          {/* -------------------- APP LOGO -------------------- */}
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>

          {this.props.currentUser ?
            <></>
            :
            <img onClick={this.handleOpenModal} className="accountLogo" src={accountLogo} />
          }

          {/* ------------------------ LOG OUT LOGO -------------------- */}
          {this.props.currentUser &&
            <Link to="/"><img className="logOutLogo" src={logOutLogo} onClick={this.props.handleLogout}>
            </img>
            </Link>
          }
        </nav>
        {/* -------------- Greeting when user logged in -------------------- */}
        <div className="greeting">
          {this.props.currentUser ?
            <>
              <p>Hello&nbsp;{this.props.currentUser.username}!</p>
            </>
            :
            <></>}
        </div>

        {/* ---------- BIBLE VERSE SECTION -------------------------------- */}
      
        {this.props.verse.quote ?
          <div className="bible-container-wrapper">
            <div className="bible-container">
              {this.props.verse.quote &&
                <>
                  <div className="bible-verse">
                    <h1>{this.props.verse.quote}</h1>
                    <p>-&nbsp;{this.props.verse.location}&nbsp;-</p>
                  </div>
                  <br />
                  <button onClick={this.props.refreshQuote}>Get Quote</button>
                </>
              }
            </div>
          </div>
          :
          <div className="no-verse-box">
            <div id="loading-text">
                <div id="lettering">l</div>
                <div className="spinner">
                  <svg width="0" height="0"><defs>
                    <clipPath id="d" clipPathUnits="objectBoundingBox">
                      <path d="M0.5,0.5m-0.5,0a0.5,0.5,0,0,1,1,0,0.5,0.5,0,0,1-1,0zM0.5,0.5m-0.375,0a0.375,0.375,0,0,0,0.75,0,0.375,0.375,0,0,0-0.75,0z" />
                    </clipPath></defs></svg>
                </div>
                <div id="lettering">ading</div>
            </div>
          </div>
            }
        {/* ------------------ Conditional Render for Log-In/ Register----------- */}
        
        { !this.props.currentUser &&
          this.state.modal &&
          <div className="modalContainer">
            <div className="modal">
             <p className="exitModal" onClick={this.exitModal}>X</p>
              {this.props.login &&
                <div className="auth-container">
                  {this.props.formData &&
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      this.props.handleLogin();
                    }}>
                      <p>Username:</p>
                      <input name="username" type="text" value={this.props.formData.username} onChange={this.props.handleChange} />
                      <p>Password:</p>
                      <input name="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
                      <br />
                      <button>Login</button><br />
                      <p>Don't have an account?</p>
                      <h3 onClick={this.props.toggleLogin}>Register</h3>
                    </form>
                  }
                </div>}

              {!this.props.login &&
                <div className="auth-container">
                  {this.props.formData &&
                    <form onSubmit={this.props.handleRegister} >
                      <p>Username:</p>
                      <input name="username" type="text" value={this.props.formData.username} onChange={this.props.handleChange} />
                      <p>Email:</p>
                      <input name="email" type="text" value={this.props.formData.email} onChange={this.props.handleChange} />
                      <p>Password:</p>
                      <input name="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
                      <br />
                      <h3 onClick={this.props.handleRegister}>Register</h3>
                    </form>
                  }
                </div>
              }
            </div>
          </div>
        }

        {/*------------------------------------- Down Arrow on Header  ------------------------------ */}
        {this.props.currentUser &&
          <a href='#giftList'><img className="downArrow" src={downArrow}></img></a>
        }

      </header>
    )

  }

}