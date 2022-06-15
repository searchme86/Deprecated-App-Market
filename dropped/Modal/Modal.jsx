import React, { useState } from 'react';
import ModalPortal from './ModalPortal';
import ModalLayout from './ModalLayout';

function Modal() {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn((value) => !value);
  };

  return (
    <div>
      <button onClick={handleModal}>모달을 띄우자</button>
      <ModalPortal>
        {modalOn && <ModalLayout onClose={handleModal} />}
      </ModalPortal>
    </div>
  );
}

export default Modal;
