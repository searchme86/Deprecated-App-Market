import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PdetailContainer = styled.div`
  display: flex;
  height: 590px;
  margin: 30px 0 0 0;
`;

export const PdetailImage = styled.div`
  width: 50%;
`;

export const PdetailInfo = styled.div`
  position: relative;
  width: 50%;
`;

export const PdetailUser = styled.div`
  display: flex;
  align-items: center;
`;

export const PdetailUserSection = styled.div`
  margin: 0 0 0 12px;
`;

export const PdetailUserNicName = styled.strong`
  font-size: 20px;
`;

export const PdetailUserAddress = styled.p`
  font-size: 20px;
`;

export const PdetailTags = styled.ul`
  display: flex;
  padding: 5px 0 5px 0;
`;

export const PdetailTagItems = styled.li`
  margin: 0 5px 0 0;
  &:last-child {
    margin-right: 0px;
  }
`;

export const PdetailTag = styled.span``;

export const PdetailItemDes = styled.p`
  font-size: 19px;
  word-break: break-all;
  margin: 5px 0 0 0;
`;

export const PdetailItemTitle = styled.strong`
  display: block;
  font-size: 25px;
  word-break: break-all;
  margin: 5px 0 10px 0;
`;

export const PdetailItemPrice = styled.span`
  display: block;
  font-size: 22px;
`;

export const PdetailItemPriceBold = styled.strong`
  display: inline-block;
  font-size: 28px;
  margin: 0 2px 5px 0;
`;

export const PdetailInfoElse = styled.div``;

export const PdCalcButton = styled.div`
  margin: 20px 0 20px 0;
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #f8f8f8;
`;

export const PdCalcButtonContent = styled.div`
  display: flex;
`;

export const PdCalcButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  background: #fff;
`;

export const PdCalcLeftButton = styled.button`
  width: 37px;
  height: 30px;
  background: #fff;
  cursor: pointer;
`;

export const PdCalcCount = styled.div`
  width: 62px;
  font-size: 13px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  text-align: center;
  line-height: 30px;
`;

export const PdCalcRightButton = styled(PdCalcLeftButton)``;

export const PdCalcPrice = styled.span`
  font-size: 15px;
  margin: 0 0 0 auto;
`;

export const PdCalcPriceBold = styled.strong`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  word-break: keep-all;
  word-wrap: nowrap;
`;

export const PdCart = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 130px;
  height: 54px;
  line-height: 51px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  background: #3072ab;
  color: #fff;
`;

export const PdEdit = styled(Link)`
  position: absolute;
  right: 0px;
  bottom: 0;
`;

export const RelatedSection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0 0 0;
`;
