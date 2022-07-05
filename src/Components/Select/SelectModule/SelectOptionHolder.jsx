import React, { useCallback, useRef } from 'react';
import {
  SelectBox,
  SelectTitle,
  SelectTitleContent,
  SelectTitleSubject,
  SelectUl,
} from '../SelectUnit.style';
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

  const { cntValue, cntShow } = selectedOption;

  // console.log('정리중 cntShow', cntShow);
  // console.log('정리중 cntValue', cntValue);

  return (
    <SelectBox ref={selectContainerRef}>
      <SelectTitle onClick={showDropdownHandler}>
        {selectedOption ? (
          <>
            <SelectTitleSubject>{cntShow}</SelectTitleSubject>
            <SelectTitleContent>{cntValue}</SelectTitleContent>
          </>
        ) : (
          selectPlaceholder
        )}
      </SelectTitle>
      <SelectUl showDropdown={showDropdown}>{children}</SelectUl>
    </SelectBox>
  );
}

export default SelectOptionHolder;
