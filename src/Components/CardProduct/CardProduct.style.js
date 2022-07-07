import styled from 'styled-components';

export const PCardItem = styled.li`
  width: calc((100% - 78px) / 4);
  margin: 0 13px 20px 13px;
  &:first-child {
    margin-left: 0;
  }
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const PCardIspace = styled.span`
  display: inline-block;
  padding: 0;
  padding-top: 56.25%;
`;

export const PCardCategory = styled.span`
  display: block;
  width: 49px;
  background: #f4976c;
  font-size: 15px;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  word-break: keep-all;
`;

export const PCardPrice = styled.strong`
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 5px 0 5px 0;
  white-space: nowrap;
  word-break: keep-all;
`;

export const PCardTitle = styled.span`
  display: block;
  width: 200px;
  color: #222;
  margin: 0 0 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${
    '' /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  }
`;

export const PCardDes = styled.p`
  color: #222;
  font-size: 15px;
  margin: 0 0 5px 0;
  height: 70px;
  line-height: 1.5;
  background: red;
`;

export const PCardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 0 0;
`;

export const PUserImage = styled.div`
  flex: 0 0 22%;
`;

export const PUserInfo = styled.div`
  flex: 0 0 70%;
`;

export const PUserNickname = styled.strong`
  display: block;
  font-size: 19px;
`;
export const PUserAddress = styled.p`
  font-size: 15px;
`;
