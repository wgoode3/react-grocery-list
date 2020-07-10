import React, { useState } from 'react';

const Form = (props) => {

  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    props.newItem({item, amount});
    setItem("");
    setAmount("");
  }

  return (
    <form onSubmit={addItem}> 
      <div className="form-group">
        <label>Item:</label>
        <input 
          type="text" 
          name="item" 
          className="form-control" 
          onChange={e => setItem(e.target.value)} 
          value={item}
        />
      </div>
      <div className="form-group">
        <label>Amount:</label>
        <input 
          type="text" 
          name="amount" 
          className="form-control" 
          onChange={e => setAmount(e.target.value)}
          value={amount}
        />
      </div>
      <input 
        type="submit" 
        value="Add Item to List" 
        className="btn btn-outline-info btn-block"
      />
    </form>
  );
}

export default Form;