import React from 'react';
import Item from './Item';

const ItemTable = ({ data }) => {
  return (
    <table>
      <tr className='tableTitle'>
        <th>Item Table</th>
      </tr>
      <tr>
        <th>ID</th>
        <th>List ID</th>
        <th>Name</th>
      </tr>
      {data && data.map(item => (
        <Item key={item.id} data={item} />
      ))}
    </table>
  );
};

export default ItemTable;
