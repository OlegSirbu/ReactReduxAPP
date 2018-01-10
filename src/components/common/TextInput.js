import React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = ({onChange, value, error, label, type, name}) => {
  return (

    <div>
      {label}
      <TextField
        name={name}
        type={type}
        errorText={error}
        onChange={(event) => onChange(event)}
        value={value}
      />
    </div>
  );
};
export default TextInput;
