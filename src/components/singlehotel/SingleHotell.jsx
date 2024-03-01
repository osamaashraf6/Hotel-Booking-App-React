import React from 'react';
import { useParams } from 'react-router-dom';
import {hotels} from '../../utils/data';
import './SingleHotell.css';

const SingleHotell = () => {
  const { id } = useParams();
  const num = parseInt(id, 10);
 
  const updated = hotels.filter((item) => item.id === num);
  console.log(updated);
  return (

    <>
      {updated.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </>
  );
};

export default SingleHotell;
