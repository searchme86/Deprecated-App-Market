import React from 'react';
import {
  ModalContent,
  ModalHeader,
  ModalTitle,
} from '../../../Components/Modal/Modal.style';
import ModalFrame from '../../../Components/Modal/ModalFrame';
import PopupPostCode from '../../../Components/PostCode/PopupPostCode';

function ProductPostCode({ postCode }) {
  const { handleClose, isOpen, setAddress } = postCode;

  return (
    <div>
      <ModalFrame
        handleClose={handleClose}
        isOpen={isOpen}
        domId="product-address-modal"
      >
        <>
          <ModalHeader>
            <ModalTitle>주소 검색</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <PopupPostCode handleClose={handleClose} setAddress={setAddress} />
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductPostCode;
