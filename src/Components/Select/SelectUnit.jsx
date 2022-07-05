import React, { useState, useCallback } from 'react';
import SelectOptionHolder from './SelectModule/SelectOptionHolder';
import SelectOption from './SelectModule/SelectOption';

function SelectUnit({ data = [], handler, selected }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownHandler = useCallback((e) => {
    e.preventDefault();
    setShowDropdown((showDropdown) => !showDropdown);
  }, []);

  const updateSelectedOption = useCallback(
    (option) => {
      setSelectedOption(option);
      handler(option);
      setShowDropdown(false);
    },
    [handler]
  );

  console.log('selectedOption', selectedOption);

  console.log('data', data);
  console.log('handler', handler);
  console.log('selected', selected);

  return (
    <SelectOptionHolder
      selectedOption={selectedOption}
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      showDropdownHandler={showDropdownHandler}
      selectPlaceholder="항목을 선택해주세요"
    >
      {data.map(({ cntShow, cntValue, handler }, index) => (
        <SelectOption changeHandler={updateSelectedOption} value={cntValue}>
          <div className="">
            <span style={{ display: 'block' }}> {cntShow}</span>
            <span>{cntValue}</span>
          </div>
        </SelectOption>
      ))}
    </SelectOptionHolder>
  );
}

export default SelectUnit;
