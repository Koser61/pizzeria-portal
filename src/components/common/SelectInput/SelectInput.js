import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectInput = ({ id, label, options }) => {
  return (
    <FormControl>
      <InputLabel id={id + '-label'}>{label}</InputLabel>
      <Select
        labelId={id + '-label'}
        id={id}
        name={id}
        value={id}
        label={label}
      >
        {Object.values(options).map((option) => {
          function getKeyByValue(object, value) {
            return Object.keys(object).find((key) => object[key] === value);
          }

          return (
            <MenuItem
              value={getKeyByValue(options, option)}
              defaultChecked={option.default}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
};

export default SelectInput;
