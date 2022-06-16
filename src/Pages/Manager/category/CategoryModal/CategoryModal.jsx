import React from 'react';
import {
  ModalAction,
  ModalButton,
  ModalTitle,
  ModalContent,
} from '../../../../Components/Modal/Modal.style';
import ModalFrame from '../../../../Components/Modal/ModalFrame';

function CategoryModal({ handleClose, isOpen }) {
  return (
    <ModalFrame handleClose={handleClose} isOpen={isOpen}>
      <>
        <ModalTitle>모달타이틀</ModalTitle>
        <ModalContent>ddddd</ModalContent>
        <ModalAction>
          <ModalButton>항목 변경하기</ModalButton>
        </ModalAction>
      </>
    </ModalFrame>
  );
}

export default CategoryModal;
