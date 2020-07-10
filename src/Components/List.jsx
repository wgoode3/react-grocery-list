import React from 'react';

const List = (props) => {

  const remove = (e, i) => {
    e.preventDefault();
    props.delete(i);
  } 

  return (
    <ul className="list-group">
      {props.basket.map((grocery, i) => 
        <li key={i} className="list-group-item">
          {grocery.item}, {grocery.amount}
          <a href="#" onClick={e => remove(e, i)} className="close">&times;</a>
        </li>
      )}
    </ul>
  );
}

export default List;