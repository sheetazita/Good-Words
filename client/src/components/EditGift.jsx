import React from 'react';
import { withRouter } from 'react-router-dom';

function EditGift(props) {
  return (
    <div>
      <h3>Edit Gft</h3>
      <form onSubmit={props.handleSubmit}>
        
        <p>Gift's name:</p>

        <input
          type="text"
          name="name"
          value={props.giftForm.name}
          onChange={props.handleFormChange} />
        
        <p>Photo Link:</p>
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
        
        <p>Product Link:</p>
        <input
          type="text"
          name="product_link"
          value={props.giftForm.product_link}
          onChange={props.handleFormChange} />


        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default withRouter(EditGift);