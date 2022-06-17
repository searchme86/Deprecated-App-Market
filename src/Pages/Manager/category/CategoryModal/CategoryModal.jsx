import React from 'react';
import { AlignComponents } from '../../../../Assets/Styles/Layout.style';
import {
  ModalAction,
  ModalHeader,
  ModalTitle,
  ModalForm,
  ModalContent,
  ModalList,
  ModalItem,
  ModalInfo,
  ModalInfoList,
  ModalInfoTitle,
  ModalInfoDes,
  ModalInfoBold,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
  ResetButton,
} from '../../../../Components/Modal/Modal.style';
import ModalFrame from '../../../../Components/Modal/ModalFrame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
} from '@chakra-ui/react';

import FileBase from 'react-file-base64';

function CategoryModal({ ParentProps }) {
  const {
    handleClose,
    isOpen,
    category,
    setCategory,
    onInputChange,
    handleClear,
    handleSubmit,
    categoryTitle,
    categoryDescription,
    categoryLink,
    ImageDescription,
    isError,
    canTrigger,
  } = ParentProps;
  return (
    <ModalFrame handleClose={handleClose} isOpen={isOpen}>
      <>
        <ModalHeader>
          <ModalTitle>카테고리 등록하기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <ModalForm>
            <FormControl isRequired isInvalid={isError} onSubmit={handleSubmit}>
              <AlignComponents mb="30" bg="#fbfbfb">
                <ModalList>
                  <ModalItem>
                    <FormLabel
                      htmlFor="categoryTitle"
                      mb={0}
                      mr={0}
                      fontSize={18}
                    >
                      카테고리 타이틀
                    </FormLabel>
                    <Input
                      id="categoryTitle"
                      type="text"
                      placeholder="카테고리 타이틀을 입력해주세요"
                      value={categoryTitle || ''}
                      name="categoryTitle"
                      onChange={onInputChange}
                      size="sm"
                      variant="flushed"
                      color="teal"
                      fontSize="xs"
                      _placeholder={{ color: 'inherit' }}
                      autoComplete="off"
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
                  <ModalItem>
                    <FormLabel
                      htmlFor="categoryDescription"
                      mb={0}
                      mr={0}
                      fontSize={16}
                    >
                      카테고리 설명
                    </FormLabel>
                    {/* <Input
                      id="categoryDescription"
                      type="text"
                      placeholder="카테고리에 대해 설명해주세요"
                      // value={categoryDescription}
                      size="sm"
                      variant="flushed"
                      color="teal"
                      fontSize="xs"
                      _placeholder={{ color: 'inherit' }}
                      isInvalid
                      focusBorderColor="lime"
                      errorBorderColor="crimson"
                    /> */}
                    <Textarea
                      id="categoryDescription"
                      value={categoryDescription}
                      name="categoryDescription"
                      onChange={onInputChange}
                      placeholder="카테고리에 대해 설명해주세요"
                      size="sm"
                      fontSize="xs"
                      isRequired
                    />
                    {isError ? (
                      <FormHelperText as="p" mt={0}>
                        카테고리에 대한 설명을 입력해주세요
                      </FormHelperText>
                    ) : (
                      ''
                    )}
                  </ModalItem>
                  <ModalItem>
                    <FormLabel
                      htmlFor="categoryLink"
                      mb={0}
                      mr={0}
                      fontSize={16}
                    >
                      카테고리 링크
                    </FormLabel>

                    <InputGroup size="sm">
                      <InputLeftAddon children="category/" />
                      <Input
                        id="categoryLink"
                        type="text"
                        placeholder="해당 카테고리명 을 입력해주세요"
                        value={categoryLink}
                        name="categoryLink"
                        onChange={onInputChange}
                        size="sm"
                        p="2"
                        variant="flushed"
                        color="teal"
                        fontSize="xs"
                        _placeholder={{ color: 'inherit' }}
                        autoComplete="off"
                        isInvalid
                        focusBorderColor="lime"
                        errorBorderColor="crimson"
                      />
                      <InputRightAddon children=".com" />
                    </InputGroup>

                    {isError ? (
                      <FormHelperText as="p" mt={0}>
                        해당 카테고리로 이동할 링크명을 입력해주세요
                      </FormHelperText>
                    ) : (
                      ''
                    )}
                  </ModalItem>
                  <ModalItem>
                    <div className="">
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setCategory({ ...category, imageFile: base64 })
                        }
                      />
                    </div>
                  </ModalItem>
                  <ModalItem>
                    <FormLabel
                      htmlFor="ImageDescription"
                      mb={0}
                      mr={0}
                      fontSize={16}
                    >
                      카테고리 설명
                    </FormLabel>

                    {/* <Input
                      id="ImageDescription"
                      type="text"
                      placeholder="해당 카테고리로 이동할 링크명을 입력해주세요"
                      // value={ImageDescription}
                      size="sm"
                      variant="flushed"
                      color="teal"
                      fontSize="xs"
                      _placeholder={{ color: 'inherit' }}
                      isInvalid
                      focusBorderColor="lime"
                      errorBorderColor="crimson"
                    /> */}

                    <Textarea
                      id="ImageDescription"
                      placeholder="카테고리 이미지에 대한 간략한 설명을 남겨주세요"
                      value={ImageDescription}
                      name="ImageDescription"
                      onChange={onInputChange}
                      size="sm"
                      fontSize="xs"
                      isRequired
                    />

                    {isError ? (
                      <FormHelperText as="p" mt={0}>
                        카테고리 이미지에 대한 설명글을 입력해주세요
                      </FormHelperText>
                    ) : (
                      ''
                    )}
                  </ModalItem>
                </ModalList>
                <ResetButton
                  type="button"
                  role="button"
                  style={{ alignSelf: 'flex-end' }}
                  onClick={handleClear}
                >
                  초기화
                </ResetButton>
              </AlignComponents>
              <ModalInfo>
                <ModalInfoTitle>[유의사항]</ModalInfoTitle>
                <ModalInfoList>
                  <ModalItem mb="10" display="flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ fontSize: 10, color: '#ffd43b' }}
                    />
                    <ModalInfoDes>
                      "카테고리 타이틀"은
                      <ModalInfoBold>제품/상품에 대한 주제</ModalInfoBold>
                      입니다 (예:가전 / 식품)
                    </ModalInfoDes>
                  </ModalItem>
                  <ModalItem mb="10" display="flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ fontSize: 10, color: '#ffd43b' }}
                    />
                    <ModalInfoDes>
                      "카테고리 설명"은
                      <ModalInfoBold>제품/상품에 대한 상세설명</ModalInfoBold>
                      입니다. (예: 전기전자 제품을 확인 할 수 있습니다. )
                    </ModalInfoDes>
                  </ModalItem>
                  <ModalItem mb="10" display="flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ fontSize: 10, color: '#ffd43b' }}
                    />
                    <ModalInfoDes>
                      "카테고리 링크"는
                      <ModalInfoBold>이동할 페이지 주소</ModalInfoBold>를
                      의미합니다. (예: electric)
                    </ModalInfoDes>
                  </ModalItem>
                  <ModalItem mb="10" display="flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ fontSize: 10, color: '#ffd43b' }}
                    />
                    <ModalInfoDes>
                      "카테고리 이미지"는 카테고리를
                      <ModalInfoBold>대표하는 이미지</ModalInfoBold>입니다
                      카입니다. (예: iphone.svg)
                    </ModalInfoDes>
                  </ModalItem>
                  <ModalItem mb="10" display="flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ fontSize: 10, color: '#ffd43b' }}
                    />
                    <ModalInfoDes>
                      "카테고리 이미지 설명"은 간략한
                      <ModalInfoBold>카테고리 이미지 설명</ModalInfoBold>입니다.
                      (예: 화면 중앙에 핸드폰이 있다. )
                    </ModalInfoDes>
                  </ModalItem>
                </ModalInfoList>
              </ModalInfo>
              <ModalAction>
                <ModalSeconDaryBtn
                  type="button"
                  role="button"
                  onClick={handleClose}
                >
                  취소
                </ModalSeconDaryBtn>
                <ModalPrimaryBtn
                  // type="submit"
                  disabled={!canTrigger}
                  role="button"
                >
                  등록
                </ModalPrimaryBtn>
              </ModalAction>
            </FormControl>
          </ModalForm>
        </ModalContent>
      </>
    </ModalFrame>
  );
}

export default CategoryModal;
