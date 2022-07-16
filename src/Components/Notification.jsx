import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

import { NotiTitle, NotiContainer, NotiContent } from './Notification.style';
import { OffScreenStrong } from '../Assets/Styles/Basic.style';

function Notification({ content }) {
  console.log('content', content);
  return (
    <NotiContainer>
      <NotiTitle>[상품등록 유의사항]</NotiTitle>
      <NotiContent>
        <TableContainer>
          <Table size="sm">
            <OffScreenStrong>폼 입력 유의사항 테이블</OffScreenStrong>
            <colgroup>
              <col width="15%" />
              <col width="35%" />
              <col width="15%" />
              <col width="35%" />
            </colgroup>
            <Thead>
              <Tr>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 타이틀
                </Th>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 설명
                </Th>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 타이틀
                </Th>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 설명
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {content.map(({ id, catA, cntA, catB, cntB }) => (
                <Tr key={id}>
                  <Th scope="row" textAlign="left" fontSize="13px">
                    {catA}
                  </Th>
                  <Td>{cntA}</Td>
                  <Th scope="row" textAlign="left" fontSize="13px">
                    {catB}
                  </Th>
                  <Td>{cntB}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </NotiContent>
    </NotiContainer>
  );
}

export default Notification;
