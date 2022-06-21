import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { OffScreen } from '../Assets/Styles/Basic.style';
import { SpinnerContainer, SpinnerWrapper } from './Spinner.style';

function LodingSpinner() {
  return (
    <SpinnerWrapper>
      <SpinnerContainer>
        <OffScreen>Loading...</OffScreen>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </SpinnerContainer>
    </SpinnerWrapper>
  );
}

export default LodingSpinner;
