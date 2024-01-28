import React, { useEffect } from 'react';

const Check = ({ isCheck }) => {
  useEffect(() => {
    console.log(isCheck);
  }, [isCheck]);
  return <div></div>;
};

export default Check;

// If you want to ignore the prop types error then we have to just declare the below line at the top of the file

/* eslint-disable react/prop-types */

// OR we want remove it globally then make direct change in eslint config file

// "rules": {
//   "react/prop-types": "off"
// }

//Then restart the project
