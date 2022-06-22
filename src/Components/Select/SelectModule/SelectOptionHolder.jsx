import React, { useCallback, useRef } from 'react';
import { SelectBox, SelectTitle, SelectUl } from '../SelectUnit.style';
import useOnClickOutside from '../SelectConfig/useOnClickOutside';

function SelectOptionHolder({
  selectedOption,
  showDropdown,
  setShowDropdown,
  showDropdownHandler,
  selectPlaceholder,
  children,
}) {
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = useCallback(
    () => setShowDropdown(false),
    [setShowDropdown]
  );
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  return (
    <SelectBox ref={selectContainerRef}>
      <SelectTitle onClick={showDropdownHandler}>
        {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
      </SelectTitle>
      <SelectUl showDropdown={showDropdown}>{children}</SelectUl>
    </SelectBox>
  );
}

export default SelectOptionHolder;
