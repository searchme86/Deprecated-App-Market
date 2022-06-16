import React, { useEffect } from 'react';
import ModalPortal from './ModalPortal';
import {
  ModalContent,
  ModalLayer,
  ModalWrapper,
  ModalButton,
  ModalCloseButton,
  ModalLayOut,
  ModalAction,
} from './Modal.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { OffScreenSpan } from '../../Assets/Styles/Basic.style';

function ModalFrame({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ModalPortal wrapperId="react-portal-modal-container">
      <ModalWrapper>
        <ModalLayer>
          <ModalLayOut>
            <ModalCloseButton onClick={handleClose}>
              <OffScreenSpan>모달창 닫기 버튼</OffScreenSpan>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 30, color: '#146ebe' }}
              />
            </ModalCloseButton>
            <ModalContent>{children}</ModalContent>
            <ModalAction>
              <ModalButton>항목 변경하기</ModalButton>
            </ModalAction>
          </ModalLayOut>
        </ModalLayer>
      </ModalWrapper>
    </ModalPortal>
  );
}

export default ModalFrame;
