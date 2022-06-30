import styled from 'styled-components';

export const ReportHeader = styled.div`
  margin: 0 0 10px 0;
`;

export const ReportIntro = styled.p``;

export const ReportUser = styled.strong`
  display: inline-block;
  vertical-align: center;
  line-height: 1;
  font-size: 20px;
  margin: 0 5px 0 0;
`;

export const ReportContent = styled.div``;

export const ReportMain = styled.div`
  display: flex;
`;

export const ReportImage = styled.div`
  width: 50%;
  margin: 0 20px 0 0;
`;

export const ReportInfo = styled.div`
  width: 50%;
`;

export const ReportInfoList = styled.ul``;

export const ReportInfoLi = styled.li`
  flex: 1;
  margin: 10px 0 10px 0;
  text-align: left;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-top: 0;
  }
`;

export const ReportTitle = styled.strong`
  position: relative;
  display: block;
  font-size: 15px;
  font-weight: bold;
  padding: 0 0 0 10px;
  transition: 0.2s;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 3px;
    height: 100%;
    background: #767676;
  }
`;

export const ReportDTitle = styled.span`
  margin: 0 0 0 10px;
  font-size: 14px;
  font-weight: normal;
  white-space: nowrap;
  word-break: keep-all;
`;

export const ReportDOpinion = styled.p`
  margin: 0 0 0 5px;
  font-size: 14px;
`;

export const ReportHashTag = styled.span`
  border: 1px solid #767676;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  border-radius: 15px;
`;

export const ReportInfoItem = styled.li`
  flex: 1;
  text-align: left;
`;

export const ReportOverflow = styled.div`
  overflow-y: auto;
  height: 106px;
  padding: 5px;
  box-sizing: border-box;
  margin: 5px 0 0 0;
`;

export const ReportOverflowList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ReportOverflowLi = styled.li`
  margin: 0 7px 7px 0;
  padding: 0 0 4px 0;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const ReportMore = styled.div`
  overflow-y: auto;
  height: 160px;
  padding: 5px;
  box-sizing: border-box;
`;

export const RTableWrapper = styled.div`
  margin: 7px 0 0 0;
`;

export const RTable = styled.table`
  width: 100%;
`;

export const RTableTh = styled.th`
  font-size: 14px;
  text-align: center;
`;

export const RTableTd = styled.td`
  font-size: 14px;
  text-align: center;
`;

export const ReportAlert = styled.ul``;

export const ReportAlertList = styled.li`
  margin: 0 0 10px 0;
`;

export const ReportAlertMessage = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #ea035c;
`;

export const ReportBlank = styled.span`
  display: inline-block;
  vertical-align: center;
  margin: 2px 0 0 0;
  font-size: 14px;
  font-weight: bold;
  color: #ea035c;
`;
