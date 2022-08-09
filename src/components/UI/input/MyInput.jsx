/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => (
  <input className={classes.myInput} {...props} />
);

export default MyInput;
