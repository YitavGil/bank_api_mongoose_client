import React from 'react';

const User = (props) => {
  return <div>
      <h1>{props.user.name}</h1>
      <h3>{props.user.city}</h3>
      <h3>{props.user.age}</h3>
      <h3>{props.user.cash}</h3>
      <h3>{props.user.credit}</h3>
  </div>;
};

export default User;
