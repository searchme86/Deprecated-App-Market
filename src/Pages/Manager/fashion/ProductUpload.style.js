import styled, { css } from 'styled-components';

export const SectionUnit = styled.section`
  width: 100%;
  padding: 20px 0 20px 0;
  margin: 0 0 30px 0;
  background: ${({ color }) => (color ? `${color}` : '#fff')};
`;

export const SectionLayout = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div``;

export const SectionTitle = styled.h1`
  position: relative;
  font-size: 32px;
  font-weight: bold;
  padding: 0 0 30px 0;
  margin: 0 0 0 30px 0;
  transition: 0.2s;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 24px;
    height: 3px;
    background: #f7991c;
  }
`;

export const SectionContent = styled.div`
  ${'' /* margin: 30px 0 20px 0; */}
`;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 20px 0;
`;

export const FlexAlignDiv = styled.div`
  ${({ fixed }) =>
    fixed &&
    css`
      position: sticky;
      top: 20px;
      height: 100%;
    `}
`;

export const PForm = styled.form`
  display: block;
  width: 100%;
`;

export const PFormContent = styled.div`
  position: relative;
  width: ${({ wd }) => wd};
  padding: ${({ padding }) => padding};
  margin-right: ${({ mr }) => mr};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const PFormBlock = styled.div`
  margin-top: 10px;
  border-top: 1px dotted #000;
`;

export const PFormBlockTitle = styled.p`
  margin: 12px 0 0 0;
  font-size: 18px;
  font-weight: bold;
`;

export const PFormBlockTitleDes = styled.span`
  display: inline-block;
  margin: 0 0 0 5px;
  font-size: 12px;
  color: #767676;
  line-height: 1;
`;

export const PFormBundle = styled.div`
  width: 60%;
  margin: 0 30px 0 0;
`;

export const PFormUnit = styled.div`
  margin: 0 0 25px 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PFormList = styled.ul``;
export const PFormLi = styled.li`
  width: 100%;
  display: flex;
`;
export const PFormLiItem = styled.div`
  display: flex;
  width: 100%;
`;

export const PFormDesWrapper = styled.div`
  margin-bottom: 5px;
  margin-top: -8px;
`;

export const PFormDesList = styled.ul``;

export const PFormDesLi = styled.li``;

export const PFormDes = styled.p`
  font-size: 12px;
  color: #767676;
`;

export const TagWrapper = styled.div``;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid rgb(226, 232, 240);
  padding: 0.5em;
  border-radius: 6px;
`;

export const TagItemList = styled.ul``;

export const TagItem = styled.li`
  background-color: rgb(218, 216, 216);
  display: inline-block;
  padding: 0.5em 0.75em;
  border-radius: 20px;
  margin: 5px 5px 0 0;
  &:last-child {
    margin-right: 0;
  }
`;

export const TagItemDelete = styled.span`
  height: 20px;
  width: 20px;
  background-color: #767676;
  color: #fff;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;
  font-size: 18px;
  cursor: pointer;
`;

export const TagInput = styled.input`
  flex-grow: 1;
  padding: 0.5em 0;
  border: none;
  outline: none;
  margin: 5px 0 0 0;
`;
