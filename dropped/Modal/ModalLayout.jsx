import React from 'react';
import ModalPortal from './ModalPortal';
import styled from 'styled-components';

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  border: 1px solid red;
`;

const Content = styled.div`
  height: 100%;
  width: 950px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: #141414;
`;

function ModalLayout({ onClose }) {
  return (
    <ModalPortal>
      <Background>
        <Content>
          <h1>모달의 제목</h1>
          <button onClick={onClose}>버튼</button>
        </Content>
      </Background>
    </ModalPortal>
  );
}

export default ModalLayout;
