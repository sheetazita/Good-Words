import React, { Component } from 'react';
import EditGift from './EditGift'
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class GiftDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id)
    console.log(this.props.mountEditForm)
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (this.state.gift_id.gift.topic_id !== prevState.gift_id.gift.topic_id) {
  //     const gift = await readGift(this.state.gift_id.gift.topic_id);
  //     this.setState({ gift });
  //     console.log(gift)
  //   }
  // }

  render() {
    const { gift } = this.props;
    return (

      <div className="giftDetailsWrapper">
        {gift === undefined ? <h2>Loading . . .</h2>
          :
          (<div className="giftDetails">
            <img alt={gift.name} src={gift.image} />
            <div className="giftInfo">
              <h1>{gift.name}</h1>
              <p>${gift.price}</p>
              <a href={gift.product_link} target="_blank" rel="noopener">Love it? Purchase here!</a>
              <br />
              <Link to="/"><button>Back to Gift Lists</button></Link>
            </div>

            {this.state.isEdit ?
              <Route path={'/gifts/:id/edit'} render={() => (
                <EditGift
                  handleFormChange={this.props.handleFormChange}
                  
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editGift(this.props.id);
                    this.setState({ isEdit: false })
                    this.props.history.push(`/gifts/${this.props.id}`)
                  }}
                  giftForm={this.props.giftForm} />
              )} />
              :
              <>
                <div className="giftDetailButtons">
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/gifts/${gift.id}/edit`)
                }}>Edit</button>

                <button onClick={() => {
                  this.props.deleteGift(gift.id);
                  this.props.history.push('/')
                }}>Delete</button>
                </div>
              </>
            }

          </div>)

        }
      </div>)
  }
}

export default withRouter(GiftDetails);