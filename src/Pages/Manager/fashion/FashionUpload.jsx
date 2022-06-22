import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import SelectUnit from '../../../Components/Select/SelectUnit';

function FashionUpload() {
  return (
    <div>
      <div className="" style={{ display: 'flex', padding: '30px' }}>
        <div className="">
          <FormControl isRequired>
            <FormLabel htmlFor="productType">제품 카테고리</FormLabel>
            <Select placeholder="Select option" id="productType">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <div className="">
            <SelectUnit />
          </div>
        </div>
        <div className="">ddd</div>
      </div>
    </div>
  );
}

export default FashionUpload;
