import React from 'react'
import { withRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

function GiftLists(props) {
  return (
    <div id='giftList' className="giftListsContainer">
    <div className="giftListTitle">Suggested gifts related to verse</div>
      <br />
        {props.gifts &&
          props.gifts.map(gift => (
            <div className="giftList"
              key={gift.id} onClick={(e) => {props.history.push(`/gifts/${gift.id}`)}}>
              <img className="giftListImg" src={gift.image} />
            <h1>{gift.name}</h1>
              </div>
          ))
        }
      <div className="addGiftList">
      <Link to="/new/gift"><span className="plus">+</span></Link>
      </div>
    </div>
  )
}

export default withRouter(GiftLists)