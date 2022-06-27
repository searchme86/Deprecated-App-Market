import React from 'react';
import { SelectLi } from '../SelectUnit.style';

function SelectOption({ value, children, changeHandler }) {
  const clickHandler = () => {
    changeHandler(value);
  };

  return <SelectLi onClick={clickHandler}>{children}</SelectLi>;
}

export default SelectOption;
