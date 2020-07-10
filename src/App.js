import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import List from './Components/List';


function App() {

  const [basket, setBasket] = useState([]);

  const newItem = (data) => {
    console.log(data);
    setBasket([...basket, data]);
  }

  const deleteItem = (i) => {
    console.log(i);
    let copy = [...basket];
    copy.splice(i, 1);
    setBasket(copy);
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
              <Form newItem={newItem} />
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <h3>Current List</h3>
          <List basket={basket} delete={deleteItem}/>
        </div>
      </div>
    </div>
  );
}

export default App;
