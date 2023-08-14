import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../redux/contactSlice.js';
import { getFilter } from 'components/redux/selectors';


const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = evt => {
    dispatch(filterContact(evt.currentTarget.value));
    };

  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;


