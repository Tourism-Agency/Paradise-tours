import React from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const CustomSelect = ({
  id,
  name,
  inputLabelId,
  placeholder,
  defaultValue = '',
  selectItems,
  value,
  onChange,
}) => {
  return (
    <>
      <InputLabel id={inputLabelId}>{placeholder}</InputLabel>
      <Select
        id={id}
        labelId={inputLabelId}
        label={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        inputProps={{
          name,
          inputRef: (ref) => {
            if (!ref) return;
          },
        }}
      >
        {selectItems.map((item) => (
          <MenuItem
            key={item.id}
            value={item.value ? item.value : item.name}
            data-id={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default CustomSelect;
