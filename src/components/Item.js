// libraries
import React from "react";
// styles
import '../styles/Item.scss'

const Item = ({ data }) => {
  return (
    <tr className='itemRow'>
      <td>{data.id}</td>
      <td>{data.listId}</td>
      <td>{data.name}</td>
    </tr>
  );
};

export default Item;
