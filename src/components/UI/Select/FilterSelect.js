import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export const FilterValues = {
  ARTICLES_READ:  1,
  ARTICLES_ADDED: 2,
  WORDS_READ:     3,
  WORDS_ADDED:    4,
  TIME_SPENT:     5,
  TIME_ADDED:     6,
  TAGS_READ:      7,
  TAGS_WORDS:     8,
  TAGS_TIME:      9,
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
      <option value={FilterValues.TIME_SPENT}>Time Spent</option>
      <option value={FilterValues.TIME_ADDED}>Time Added</option>
      <option value={FilterValues.TAGS_READ}>Articles Read by Tags</option>
      <option value={FilterValues.TAGS_WORDS}>Words Read by Tags</option>
      <option value={FilterValues.TAGS_TIME}>Time Spent by Tags</option>
    </Select>
  </FormControl>
);
