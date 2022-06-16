import React, { useState } from 'react';
import { AlignComponents } from '../../../../Assets/Styles/Layout.style';
import {
  ModalAction,
  ModalHeader,
  ModalTitle,
  ModalForm,
  ModalContent,
  ModalList,
  ModalItem,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
  ResetButton,
} from '../../../../Components/Modal/Modal.style';
import ModalFrame from '../../../../Components/Modal/ModalFrame';
import FileBase from 'react-file-base64';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

function CategoryModal({ handleClose, isOpen }) {
  const initialState = {
    categoryTitle: '',
    categoryDescription: '',
    categoryLink: '',
    ImageDescription: '',
  };

  const isError = '';

  const [category, setCategory] = useState(initialState);

  const [modalData, setModalData] = useState('');

  const { categoryTitle, categoryDescription, categoryLink, ImageDescription } =
    category;

  return (
    <ModalFrame handleClose={handleClose} isOpen={isOpen}>
      <>
        <ModalHeader>
          <ModalTitle>카테고리 등록하기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <ModalForm>
            <FormControl isRequired isInvalid={isError}>
              <AlignComponents>
                {/* 현재 여기 등록중 */}
                <ModalList>
                  <ModalItem>
                    <FormLabel
                      htmlFor="categoryTitle"
                      mb={0}
                      mr={0}
                      fontSize={20}
                    >
                      카테고리 타이틀
                    </FormLabel>
                    <Input
                      id="categoryTitle"
                      type="text"
                      placeholder="카테고리 타이틀을 입력해주세요"
                      // value={categoryTitle || ''}
                      size="sm"
                      variant="flushed"
                      color="teal"
                      fontSize="sm"
                      _placeholder={{ color: 'inherit' }}
                      isInvalid
                      focusBorderColor="lime"
                      errorBorderColor="crimson"
                    />
                    {isError ? (
                      <FormHelperText as="p" mt={0}>
                        카테고리 타이틀을 입력해주세요
                      </FormHelperText>
                    ) : (
                      ''
                    )}
                  </ModalItem>
                  <ModalItem>dd</ModalItem>
                  <ModalItem>dd</ModalItem>
                  <ModalItem>
                    <div className="">
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setModalData({ ...modalData, imageFile: base64 })
                        }
                      />
                    </div>
                  </ModalItem>
                  <ModalItem>dd</ModalItem>
                </ModalList>
                {/* 현재 여기 등록중 */}
                <ResetButton>초기화</ResetButton>
              </AlignComponents>
              <ModalAction>
                <ModalSeconDaryBtn onClick={handleClose}>
                  취소
                </ModalSeconDaryBtn>
                <ModalPrimaryBtn>등록</ModalPrimaryBtn>
              </ModalAction>
            </FormControl>
          </ModalForm>
        </ModalContent>
      </>
    </ModalFrame>
  );
}

export default CategoryModal;
