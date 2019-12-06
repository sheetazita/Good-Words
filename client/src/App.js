import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// import TeacherPage from './components/TeacherPage';
// import CreateTeacher from './components/CreateTeacher'
// import Login from './components/Login'
import Register from './components/Register'

import {
  // createTeacher,
  readRandomVerse,
  // updateTeacher,
  // destroyTeacher,
  loginUser,
  registerUser,
  verifyUser,
  readAllGifts
} from './services/api-helper'

import './App.css';
import Header from './components/Header';
import GiftLists from './components/GiftLists';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verse: "",
      gifts: [],
      // teacherForm: {
      //   name: "",
      //   photo: ""
      // },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      login: true,
    };
  }
  
  toggleLogin = () => {
    this.setState(prevState => ({
      login:!prevState.login
    }))
  }

  refreshQuote = async () => {
    const verse = await readRandomVerse();
    this.setState({ verse })
  }

  async componentDidMount() {
    await this.refreshQuote();
    const gifts = await readAllGifts(this.state.verse.topic_id);
    this.setState({ gifts })
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.verse.topic_id !== prevState.verse.topic_id) {
      const gifts = await readAllGifts(this.state.verse.topic_id);
      this.setState({ gifts });
    }
  }

  // getTopics = async () => {
  //   const topics = await readAllTopics();
  //   this.setState({
  //     topics
  //   })
  // }

  // newTeacher = async (e) => {
  //   e.preventDefault();
  //   const teacher = await createTeacher(this.state.teacherForm);
  //   this.setState(prevState => ({
  //     teachers: [...prevState.teachers, teacher],
  //     teacherForm: {
  //       name: "",
  //       photo: ""
  //     }
  //   }))
  // }

  // editTeacher = async () => {
  //   const { teacherForm } = this.state
  //   await updateTeacher(teacherForm.id, teacherForm);
  //   this.setState(prevState => (
  //     {
  //       teachers: prevState.teachers.map(teacher => {
  //         return teacher.id === teacherForm.id ? teacherForm : teacher
  //       }),
  //     }
  //   ))
  // }

  // deleteTeacher = async (id) => {
  //   await destroyTeacher(id);
  //   this.setState(prevState => ({
  //     teachers: prevState.teachers.filter(teacher => teacher.id !== id)
  //   }))
  // }

  // handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     teacherForm: {
  //       ...prevState.teacherForm,
  //       [name]: value
  //     }
  //   }))
  // }

  // mountEditForm = async (id) => {
  //   const teachers = await readAllTeachers();
  //   const teacher = teachers.find(el => el.id === parseInt(id));
  //   this.setState({
  //     teacherForm: teacher
  //   });
  // }

  // resetForm = () => {
  //   this.setState({
  //     teacherForm: {
  //       name: "",
  //       photo: ""
  //     }
  //   })
  // }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }
  
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/")
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (

      <div className="app" >
        <Header
          verse={this.state.verse}
          refreshQuote={this.refreshQuote}
          handleLogin={this.handleLogin}
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          handleChange={this.authHandleChange}
          currentUser={this.state.currentUser}
          formData={this.state.authFormData}
          toggleLogin={this.toggleLogin}
          login={this.state.login}
          handleRegister={this.handleRegister}
        />
 {/* -------------- If logged in, show gift lists ------------------ */}
        {/* {
          this.state.currentUser ? */}
            <Route
              exact path="/"
              render={() => (<GiftLists gifts={this.state.gifts} />)} />
            :
            <></>
        {/* } */}

        {/* <div>
            <Route
              exact path="/"
              render={() => (
                <div>
                  <Header
                    verse={this.state.verse}
                    refreshQuote={this.refreshQuote} />
                </div>
              )}
            />
          </div> */}
        {/* <Route
          path="/new/teacher"
          render={() => (
            <CreateTeacher
              handleFormChange={this.handleFormChange}
              teacherForm={this.state.teacherForm}
              newTeacher={this.newTeacher} />
          )} /> */}
        {/* <Route
          path="/teachers/:id"
          render={(props) => {
            const { id } = props.match.params;
            const teacher = this.state.teachers.find(el => el.id === parseInt(id));
            return <TeacherPage
              id={id}
              teacher={teacher}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editTeacher={this.editTeacher}
              teacherForm={this.state.teacherForm}
              deleteTeacher={this.deleteTeacher} />
          }}
        /> */}


      </div>
    );
  }
}

export default withRouter(App);