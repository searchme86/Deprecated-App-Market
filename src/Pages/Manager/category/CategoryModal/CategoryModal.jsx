import React from 'react';
import {
  ModalAction,
  // ModalButton,
  ModalTitle,
  ModalContent,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
} from '../../../../Components/Modal/Modal.style';
import ModalFrame from '../../../../Components/Modal/ModalFrame';

function CategoryModal({ handleClose, isOpen }) {
  return (
    <ModalFrame handleClose={handleClose} isOpen={isOpen}>
      <>
        <ModalTitle>모달타이틀</ModalTitle>
        <ModalContent>ddddd</ModalContent>
        <ModalAction>
          <ModalSeconDaryBtn>취소</ModalSeconDaryBtn>
          <ModalPrimaryBtn>등록</ModalPrimaryBtn>
        </ModalAction>
      </>
    </ModalFrame>
  );
}

export default CategoryModal;
