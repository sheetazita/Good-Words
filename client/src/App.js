import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import GiftDetails from './components/GiftDetails';
import CreateGift from './components/CreateGift'
import Footer from './components/Footer';
// import Login from './components/Login'
// import Register from './components/Register'

import {
  createGift,
  readRandomVerse,
  updateGift,
  destroyGift,
  loginUser,
  registerUser,
  verifyUser,
  readAllGifts,
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
      giftForm: {
        name: "",
        image: "",
        price: "",
        product_link: ""
      },
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
      login: !prevState.login
    }))
  }

  refreshQuote = async () => {
    const verse = await readRandomVerse();
    this.setState({ verse })
  }

  async componentDidMount() {
    await this.refreshQuote();
    const gifts = await readAllGifts(this.state.verse.topic_id);
    this.setState({ gifts });

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

  newGift = async (e) => {
    e.preventDefault();
    const gift = await createGift(this.state.giftForm);
    this.setState(prevState => ({
      gifts: [...prevState.gifts, gift],
      giftForm: {
        name: "",
        image: "",
        price: "",
        product_link: ""
      }
    }))
  }

  editGift = async (giftId) => {
    const { giftForm } = this.state

    const newGift = await updateGift(this.state.verse.topic_id, giftId, giftForm);
    this.setState(prevState => (
      {
        gifts: prevState.gifts.map(gift => {
          return gift.id === parseInt(giftId) ? newGift : gift
        }),
      }
    ))
  }

  deleteGift = async (id) => {
    await destroyGift(this.state.verse.topicId, id);
    this.setState(prevState => ({
      gifts: prevState.gifts.filter(gift =>
        gift.id !== parseInt(id))
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      giftForm: {
        ...prevState.giftForm,
        [name]: value
      }
    }))
  }

  mountEditForm = async (id) => {
    const gift = await this.state.gifts.find(el => el.id === parseInt(id));
    const { name, image, price, product_link } = gift
    this.setState({
      giftForm: {
        name,
        image,
        price,
        product_link
      }
    });
  }


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
        {
          this.state.currentUser !== null ?
            <Route
              exact path="/"
              render={() => (<GiftLists gifts={this.state.gifts} />)} />
            :
            <></>
        }

        <Route
          path="/new/gift"
          render={() => (
            <CreateGift
              handleFormChange={this.handleFormChange}
              giftForm={this.state.giftForm}
              newGift={this.newGift} />
          )} />

        {this.state.currentUser &&
          <Route
            path="/gifts/:id"
            render={(props) => {

              const { id } = props.match.params;
              const gift = this.state.gifts.find(el => el.id === parseInt(id));
              return <GiftDetails
                id={id}
                gift={gift}
                handleFormChange={this.handleFormChange}
                mountEditForm={this.mountEditForm}
                editGift={this.editGift}
                giftForm={this.state.giftForm}
                deleteGift={this.deleteGift}
              />
            }}
          />
        }

        <Footer />

      </div>
    );
  }
}

export default withRouter(App);