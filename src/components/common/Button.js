import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

const Button = ({label, onClick, disabled}) => (
  <RaisedButton disabled={disabled} label={label} style={style} onClick={onClick}/>
);

export default Button;
