import React from 'react';
import {
  SectionContent,
  SectionHeader,
  SectionLayout,
  SectionUnit,
} from '../Product/ProductUpload.style';

import { OffScreenTitle } from '../../../Assets/Styles/Basic.style';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCakeCandles,
  faEnvelope,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import {
  Stack,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Skeleton,
} from '@chakra-ui/react';

import defaultImg from '../../../Assets/Image/cat01.jpeg';
import UserPage from './UserPage';
import ProductOfUser from '../Product/ProductOfUser';

function UserMain() {
  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <OffScreenTitle>유저 페이지</OffScreenTitle>
        </SectionHeader>
        <SectionContent>
          <div className="" style={{ borderRadius: 6, border: '1px solid ' }}>
            <div
              className=""
              style={{
                display: 'flex',
                borderBottom: '1px solid',
                borderBottomStyle: 'dashed',
                padding: '30px 0 30px 30px',
                boxSizing: 'border-box',
              }}
            >
              <ImageHolder width="200px">
                <Image src={defaultImg} alt="유저 이미지" />
              </ImageHolder>
              <div className="" style={{ marginLeft: '30px' }}>
                <div className="" style={{ display: 'flex' }}>
                  <strong
                    style={{
                      fontSize: '28px',
                      display: 'inline-block',
                      verticalAlign: 'top',
                      lineHeight: '1',
                    }}
                  >
                    searchme86
                  </strong>
                  <Stack direction="row" ml="20px">
                    <Badge colorScheme="green" fontSize="15px">
                      먹돌이
                    </Badge>
                    <Badge colorScheme="red" fontSize="15px">
                      먹돌이
                    </Badge>
                    <Badge colorScheme="purple" fontSize="15px">
                      먹돌이
                    </Badge>
                  </Stack>
                </div>
                <div className="" style={{ marginTop: '10px' }}>
                  <ul style={{ display: 'flex' }}>
                    <li>
                      <div className="">
                        <span>
                          <FontAwesomeIcon
                            icon={faCakeCandles}
                            style={{ fontSize: '20px', color: '#303C6C' }}
                          />
                        </span>
                        <span>3월 10일 1986</span>
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span>
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ fontSize: '20px', color: '#303C6C' }}
                          />
                        </span>
                        <span>searchme86@gmail.com</span>
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span>
                          <FontAwesomeIcon
                            icon={faAddressCard}
                            style={{ fontSize: '20px', color: '#303C6C' }}
                          />
                        </span>
                        <span>7월 7일</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  consequatur tenetur veniam culpa facere, ipsum distinctio vel
                  exercitationem eligendi rerum consequuntur nostrum voluptatem,
                  placeat assumenda nihil sunt autem laudantium voluptate!
                </p>
              </div>
            </div>
            <div className="">dddd</div>
            <div className="">
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>비밀번호 변경</Tab>
                  <Tab>등록상품</Tab>
                  <Tab>요청사항</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <UserPage />
                  </TabPanel>
                  <TabPanel>
                    <ProductOfUser />
                  </TabPanel>
                  <TabPanel>
                    <p>추후 제작예정</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default UserMain;
