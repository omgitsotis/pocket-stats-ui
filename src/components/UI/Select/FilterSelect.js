import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export const FilterValues = {
  ARTICLES_READ  : 1,
  ARTICLES_ADDED : 2,
  WORDS_READ    : 3,
  WORDS_ADDED    : 4,
  TIME_SPENT     : 5,
  TIME_ADDED     : 6
};

export const FilterSelect = ({value, onFilterChanged}) => (
  <FormControl>
    <InputLabel htmlFor="filter-native-simple">Filter</InputLabel>
    <Select
      native
      value={value}
      onChange={(event) => onFilterChanged(event.target.value)}
      inputProps={{ name: 'filter', id: 'filter-native-simple' }}
    >
      <option value="" />
      <option value={FilterValues.ARTICLES_READ}>Articles Read</option>
      <option value={FilterValues.ARTICLES_ADDED}>Articles Added</option>
      <option value={FilterValues.WORDS_READ}>Words Read</option>
      <option value={FilterValues.WORDS_ADDED}>Words Added</option>
      <option value={FilterValues.TIME_SPENT}>Time spent</option>
      <option value={FilterValues.TIME_ADDED}>Time added</option>
    </Select>
  </FormControl>
);
