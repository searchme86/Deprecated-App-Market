import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const SearchBarContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 0px;
`;

export const SearchInputContainer = styled.div`
  width: calc(100% - 44px);
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  padding: 10px 10px 10px 34px;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

  color: #bebebe;
  font-size: 27px;
  vertical-align: middle;
`;

export const CloseIcon = styled(motion.span)`
  display: block;
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  color: #bebebe;
  font-size: 23px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;

export const LineSeperator = styled.span`
  background-color: #d8d8d878;
`;

export const SearchContent = styled.div`
  position: absolute;
  top: 26px;
  width: calc(100% - 44px);
  height: 300px;
  background: #fff;
  z-index: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const WarningMessage = styled.span`
  display: block;
  width: 100%;
  color: #a1a1a1;
  font-size: 14px;
  text-align: center;
`;

export const TvShowContainer = styled.ul`
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

export const SearchItem = styled.li`
  width: 100%;
  margin: 0 0 10px 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SearchItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SearchItemInfo = styled.div`
  width: 100%;
`;

export const Thumbnail = styled.div`
  display: flex;
  flex: 0.4;
  img {
    width: auto;
    height: 100%;
  }
`;

export const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

export const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;
