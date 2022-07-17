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

  return (
    <SelectBox ref={selectContainerRef}>
      <SelectTitle onClick={showDropdownHandler}>
        {selectedOption ? (
          <>
            <SelectTitleSubject>{cntShow}</SelectTitleSubject>
            <SelectTitleContent>
              {Number(cntValue).toLocaleString('ko-KR')} 원
            </SelectTitleContent>
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
