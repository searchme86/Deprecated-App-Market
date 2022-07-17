import styled from 'styled-components';

export const SelectBox = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #7aa25d;
  margin: 10px 0 0 0;
`;

export const SelectTitle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  font-size: 17px;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 35px;
    border: 7px solid transparent;
    border-color: black transparent transparent transparent;
  }
`;

export const SelectTitleSubject = styled.strong`
  display: block;
  font-size: 15px;
  color: #757575;
  margin: 0 0 2px 0;
`;

export const SelectTitleContent = styled.span`
  display: block;
  font-size: 17px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
`;

export const SelectUl = styled.ul`
  position: absolute;
  width: 100%;
  min-height: ${({ showDropdown }) => (showDropdown ? '50px' : '0')};
  visibility: ${({ showDropdown }) => (showDropdown ? 'visible' : 'hidden')};
  opacity: ${({ showDropdown }) => (showDropdown ? '1' : '0')};
  background: #fff;
  margin: 2px 0 0 0;
  z-index: 2;
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
