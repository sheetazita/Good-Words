import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateGift(props) {
  return (
    <div className="create-form">
      <h2>Create a new gift</h2>
      <form onSubmit={props.newGift}>

        <p>Gift Name</p>
        <input
          type="text"
          name="name"
          value={props.giftForm.name}
          onChange={props.handleFormChange} />
        
        <p>Image</p>
        <input
          type="text"
          name="image"
          value={props.giftForm.image}
          onChange={props.handleFormChange} />
        
        <p>Price</p>
        <input
          type="text"
          name="price"
          value={props.giftForm.price}
          onChange={props.handleFormChange} />
        
        <p>product_link</p>
        <input
          type="text"
          name="product_link"
          value={props.giftForm.product_link}
          onChange={props.handleFormChange} />
          <button>Submit</button>

      </form>
      </div > 
  )
}

export default withRouter(CreateGift);