import styled from 'styled-components';

export const SelectBox = styled.div`
  display: inline-block;
  position: relative;
  width: 400px;
  background-color: #c1c1c1;
  border-radius: 5px;
`;

export const SelectTitle = styled.span`
  position: relative;
  display: block;
  width: 400px;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    border: 7px solid transparent;
    border-color: black transparent transparent transparent;
  }
`;

export const SelectUl = styled.ul`
  position: absolute;
  width: 100%;
  min-height: ${({ showDropdown }) => (showDropdown ? '50px' : '0')};
  visibility: ${({ showDropdown }) => (showDropdown ? 'visible' : 'hidden')};
  opacity: ${({ showDropdown }) => (showDropdown ? '1' : '0')};
`;

export const SelectLi = styled.li`
  padding: 6px 20px;
  list-style-type: none;
  cursor: pointer;
  margin-top: 5px;
  border-bottom: 1px solid #e4e4e4;
  border: 1px solid #e4e4e4;

  &:hover {
    background-color: #d9d9d9;
  }

  &:last-child {
    border: 1px solid #e4e4e4;
  }
`;
