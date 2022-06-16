import styled from 'styled-components';
import { AlignComponents } from '../../Assets/Styles/Layout.style';
import { BasicButton, BasicIconBtn } from '../../Config/Styles/Button.style';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalLayer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 500px;
  max-width: 500px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 16px;
  z-index: 2;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
`;

export const ModalLayOut = styled.div`
  position: relative;
`;

export const ModalContent = styled.div`
  position: relative;
`;

export const ModalCloseButton = styled(BasicIconBtn)`
  width: ${({ width }) => width};
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid red;
`;

export const ModalAction = styled(AlignComponents)`
  border: 1px solid red;
`;

export const ModalButton = styled(BasicButton)`
  ${'' /* 10px는  버튼 간격 */}
  width: calc(100vw - 10px);
`;
