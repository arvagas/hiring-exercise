import React from "react";

const Item = ({ data }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.listId}</td>
      <td>{data.name}</td>
    </tr>
  );
};

export default Item;
