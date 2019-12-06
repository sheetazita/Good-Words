import React from 'react'
import { withRouter } from 'react-router-dom'

function GiftLists(props) {
  return (
    <div id='giftList' className="giftListsContainer">
        {props.gifts &&
          props.gifts.map(gift => (
            <div className="giftList">
              <img className="giftListImg" src={gift.image} />
              <h1>{gift.name}</h1>
            </div>
          ))
        }
        <div className="addGiftList">
          <span className="plus">+</span>
        </div>
    </div>
  )
}

export default withRouter(GiftLists)