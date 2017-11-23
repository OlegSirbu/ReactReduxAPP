import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const renderMenuItem = ({nameItem, index}) => {
  return(
    <MenuItem value={nameItem[0]} id={nameItem[0]} primaryText={nameItem[1]} key={nameItem+'_'+index}/>
  )
};

const SelectInput = ({nameSelect, handleChange, value, options}) => {
    return(
        <div>
            <SelectField
                floatingLabelText={nameSelect}
                value={value}
                onChange={(e,v,p)=> handleChange(e,v,p)}
            >
                {Object.entries(options).map((nameItem, index) => renderMenuItem({nameItem, index}))}
            </SelectField>
        </div>
    );
};

export default SelectInput;
