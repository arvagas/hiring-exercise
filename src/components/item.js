import React from 'react';

const Item = ({ data }) => {

    return (
        <div>
            <p>List ID: {data.listId}</p>
            <p>Name: {data.name}</p>
        </div>
    );
};

export default Item