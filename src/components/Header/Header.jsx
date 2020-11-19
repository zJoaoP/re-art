import React from 'react';
import { useDispatch } from 'react-redux';
import headerActions from '../../actions/headerActions';

export default function Header() {
  const dispatch = useDispatch();

  function onChange(event) {
    dispatch(headerActions.updateSearchTerm(event.target.value));
  }
  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
}
