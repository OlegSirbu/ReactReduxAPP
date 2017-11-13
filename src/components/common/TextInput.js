import React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = ({onChange, value, error, type, label, name}) => {
  return (
  <div>
    <div>
      <TextField
        name={name}
        type={type}
        floatingLabelText={label}
        errorText={error}
        onChange={(event) => onChange(event)}
        value={value}
      />
      {error && <div className="alert alert-danger">{error}</div> }
    </div>
  </div>
  );
};
export default TextInput;
