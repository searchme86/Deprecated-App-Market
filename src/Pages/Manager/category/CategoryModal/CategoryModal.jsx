import React from 'react';
import {
  ModalAction,
  ModalHeader,
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
        <ModalHeader>
          <ModalTitle>카테고리 등록하기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <strong>폼이 올 영역</strong>
        </ModalContent>
        <ModalAction>
          <ModalSeconDaryBtn onClick={handleClose}>취소</ModalSeconDaryBtn>
          <ModalPrimaryBtn>등록</ModalPrimaryBtn>
        </ModalAction>
      </>
    </ModalFrame>
  );
}

export default CategoryModal;
