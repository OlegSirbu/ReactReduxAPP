import React from 'react';

const SelectInput = ({name, label, onChange, defaultOptions, value, error, options}) => {
    let wrapperClasses = 'form-group';
    if(error && error.length > 0){
        wrapperClasses += 'has-error';
    }
    return(
        <div className={wrapperClasses} >
            <label htmlFor={name}>{label}</label>
            <div className='field'>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className='form-control'
                >
                <options value="">{defaultOptions}</options>
                {options.map((option)=> {
                    return <option key={option.value} value={option.value}>{option.text}</option>
                })
                }
                </select>
                {error && <div className="alert alert-danger">{error}</div> }
            </div>
        </div>
    );
};

export default SelectInput;
