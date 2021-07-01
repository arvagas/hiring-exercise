// libraries
import React from 'react';
// components
import Item from './Item';
//styles
import '../styles/ItemTable.scss'

const ItemTable = ({ data }) => {
  return (
    <table>
      <tr className='tableTitle'>
        <th colSpan='3'>Item Table for List ID {data[0].listId}</th>
      </tr>
      <tr className='tableCategories'>
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
