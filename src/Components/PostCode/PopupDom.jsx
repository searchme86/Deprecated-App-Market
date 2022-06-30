import React from 'react';
import { createPortal } from 'react-dom';

function PopupDom({ children }) {
  const wrapperElement = document.getElementById('popupDom');
  return createPortal(children, wrapperElement);
}

export default PopupDom;
