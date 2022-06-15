import React, { useEffect } from 'react';
import ReactPortal from './ReactPortal';
import { ModalLayer, ModalWrapper } from './Modal.style';

function ReactModal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ModalWrapper>
        <ModalLayer>
          <div className="modal-content">
            <div className="">{children}</div>

            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </ModalLayer>
      </ModalWrapper>
    </ReactPortal>
  );
}

export default ReactModal;
