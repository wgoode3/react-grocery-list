import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [basket, setBasket] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    console.log({item, amount});
    setBasket([...basket, {item, amount}]);
    setItem("");
    setAmount("");
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Groceries</h1>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header">Add an item</div>
            <div className="card-body">
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
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <h3>Current List</h3>
          <ul className="list-group">
            {basket.map(grocery => 
              <li className="list-group-item">{grocery.item}, {grocery.amount}</li>
            )}
            <li className="list-group-item">{item}, {amount}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
