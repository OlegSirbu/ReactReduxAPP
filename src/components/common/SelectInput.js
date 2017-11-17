import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const renderMenuItem = ({nameItem, index}) => {
  return(
    <MenuItem value={nameItem.value} primaryText={nameItem.name} key={nameItem+'_'+index}/>
  )
};

const SelectInput = ({nameSelect, handleChange, value, options}) => {
    return(
        <div>
            <SelectField
                floatingLabelText={nameSelect}
                value={value}
                onChange={handleChange}
            >
                {options.map((nameItem, index) => renderMenuItem({nameItem, index}))}
            </SelectField>
        </div>
    );
};

export default SelectInput;
