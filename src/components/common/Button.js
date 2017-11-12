import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

const Button = ({label, onClick}) => (
  <div>
    <RaisedButton label={label} style={style} onClick={onClick}/>
  </div>
);

export default Button;