import React from 'react'
import {withRouter} from 'react-router-dom'

function GiftLists(props) {
  return (
    <div className="giftListsContainer">
      {props.gifts &&
        props.gifts.map(gift=>(
          <div className="giftList">
          <img className="giftListImg" src={gift.image} />
          <h1>{gift.name}</h1>  
          </div>
          ))
    }
    </div>
  )
}

export default withRouter(GiftLists)