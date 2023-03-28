import css from './Filter.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <div>
      <label className={css.wrap}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.input}
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

export default Filter;
