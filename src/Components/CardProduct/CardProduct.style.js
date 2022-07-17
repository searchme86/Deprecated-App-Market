import styled from 'styled-components';

export const PCardItem = styled.li`
  width: calc((100% - 78px) / 4);
  height: 500px;
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

export const PCardTags = styled.ul`
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const PCardTag = styled.li`
  display: inline-block;
  border: 1px solid #3072ab;
  border-radius: 15px;
  margin: 0 5px 10px 0;
`;

export const PCardTagText = styled.span`
  font-size: 15px;
  padding: 10px;
  box-sizing: border-box;
`;

export const PCardTitle = styled.strong`
  display: block;
  width: 200px;
  font-size: 20px;
  color: #222;
  margin: 5px 0 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PCardDes = styled.p`
  color: #222;
  font-size: 15px;
  margin: 0 0 5px 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PCardLike = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PCardDgree = styled.strong`
  font-size: 15px;
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
