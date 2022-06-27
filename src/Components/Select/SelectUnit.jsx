import React, { useState, useCallback } from 'react';
import SelectOptionHolder from './SelectModule/SelectOptionHolder';
import SelectOption from './SelectModule/SelectOption';

function SelectUnit() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownHandler = useCallback((e) => {
    e.preventDefault();
    setShowDropdown((showDropdown) => !showDropdown);
  }, []);

  const updateSelectedOption = useCallback((option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  }, []);

  console.log('selectedOption', selectedOption);
  console.log('showDropdown', showDropdown);

  return (
    <SelectOptionHolder
      selectedOption={selectedOption}
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      showDropdownHandler={showDropdownHandler}
      selectPlaceholder="항목을 선택해주세요"
    >
      <SelectOption changeHandler={updateSelectedOption} value="one">
        One
      </SelectOption>
      <SelectOption changeHandler={updateSelectedOption} value="two">
        two
      </SelectOption>
      <SelectOption changeHandler={updateSelectedOption} value="third">
        third
      </SelectOption>
      <SelectOption changeHandler={updateSelectedOption} value="fourth">
        fourth
      </SelectOption>
      <SelectOption changeHandler={updateSelectedOption} value="fifth">
        fifth
      </SelectOption>
    </SelectOptionHolder>
  );
}

export default SelectUnit;
