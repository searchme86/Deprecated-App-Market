import React from 'react';
import ReactModal from './ReactModal';

function ReactWrapperModal({ handleClose, isOpen }) {
  return (
    <ReactModal handleClose={handleClose} isOpen={isOpen}>
      새로운 모달입니다, 축하해요
    </ReactModal>
  );
}

export default ReactWrapperModal;
