/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => (
  <button type="button" {...props} className={classes.myBtn}>
    {children}
  </button>
);

export default MyButton;
