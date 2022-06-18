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
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
} from '@chakra-ui/react';
import FileBase from 'react-file-base64';
import { useForm } from 'react-hook-form';

function CategoryModal({ ParentProps }) {
  const {
    handleClose,
    isOpen,
    category,
    setCategory,
    onInputChange,
    handleClear,
    registerForm,
    categoryTitle,
    categoryDescription,
    categoryLink,
    ImageDescription,
    canTrigger,
  } = ParentProps;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log('data', data);
    // console.log('e', e);
    registerForm();
  };

  // const onError = (errors, e) => {
  //   console.log('errors', errors);
  //   console.log('e', e);
  // };

  // console.log('isSubmitting', isSubmitting);

  return (
    <ModalFrame
      handleClose={handleClose}
      isOpen={isOpen}
      domId="create-category-modal"
    >
      <>
        <ModalHeader>
          <ModalTitle>카테고리 등록하기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <ModalForm onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors}>
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
                      value={categoryTitle || ''}
                      name="categoryTitle"
                      {...register('categoryTitle', {
                        required: '카테고리 타이틀 입력을 해주세요',
                        minLength: {
                          value: 5,
                          message: '최소입력 글자는 5글자입니다.',
                        },
                        onChange: onInputChange,
                        pattern: {
                          value: /^[a-zA-Z|ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
                          message: '숫자와 특수문자, 공백은 허용하지 않습니다.',
                        },
                      })}
                      size="sm"
                      variant="flushed"
                      color="teal"
                      fontSize="xs"
                      _placeholder={{ color: 'inherit' }}
                      autoComplete="off"
                    />
                    <FormErrorMessage as="p">
                      {errors.categoryTitle && errors.categoryTitle.message}
                    </FormErrorMessage>
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
                    <Textarea
                      id="categoryDescription"
                      value={categoryDescription}
                      name="categoryDescription"
                      {...register('categoryDescription', {
                        required: '카테고리에 대해 설명해주세요',
                        minLength: {
                          value: 10,
                          message: '최소입력 글자는 10글자입니다.',
                        },
                        onChange: onInputChange,
                        pattern: {
                          value: /^[a-zA-Z|ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
                          message:
                            '입력항목은 특수문자/숫자로 시작 할 수 없으며, 숫자와 특수문자를 포함할 수 없습니다.',
                        },
                      })}
                      size="sm"
                      fontSize="xs"
                      isRequired
                    />
                    <FormErrorMessage as="p">
                      {errors.categoryDescription &&
                        errors.categoryDescription.message}
                    </FormErrorMessage>
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
                        value={categoryLink}
                        name="categoryLink"
                        onChange={onInputChange}
                        {...register('categoryLink', {
                          required: '해당 카테고리명 을 입력해주세요',
                          minLength: {
                            value: 3,
                            message: '최소입력 글자는 3글자입니다.',
                          },
                          pattern: {
                            value: /^[a-zA-Z]+$/,
                            message:
                              '입력항목은 특수문자와 숫자, 한글, 공백은 허용하지 않습니다.',
                          },
                          onChange: onInputChange,
                        })}
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
                    <FormErrorMessage as="p">
                      {errors.categoryLink && errors.categoryLink.message}
                    </FormErrorMessage>
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

                    <Textarea
                      id="ImageDescription"
                      value={ImageDescription}
                      {...register('ImageDescription', {
                        required:
                          '카테고리 이미지에 대한 간략한 설명을 남겨주세요',
                        minLength: {
                          value: 10,
                          message: '최소입력 글자는 10글자입니다.',
                        },
                        onChange: onInputChange,
                        pattern: {
                          value: /^[a-zA-Z|ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
                          message:
                            '입력항목은 특수문자/숫자로 시작 할 수 없으며, 숫자와 특수문자를 포함할 수 없습니다.',
                        },
                      })}
                      name="ImageDescription"
                      size="sm"
                      fontSize="xs"
                      isRequired
                    />
                    <FormErrorMessage as="p">
                      {errors.ImageDescription &&
                        errors.ImageDescription.message}
                    </FormErrorMessage>
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
                  type="submit"
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
