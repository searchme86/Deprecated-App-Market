import React, { useState, useEffect, useCallback } from 'react';
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
import {
  ModalTitle,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalItem,
  ModalList,
  ModalHalf,
  ModalDesTitle,
  ModalDesIndication,
  ModalAction,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
  ResetButton,
} from '../../../../Components/Modal/Modal.style';
import { AlignComponents } from '../../../../Assets/Styles/Layout.style';

import ModalFrame from '../../../../Components/Modal/ModalFrame';

import { useForm } from 'react-hook-form';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import {
  getSingleCategory,
  updateSingleCategory,
} from '../../../../Store/Features/CategorySlice';

function UpdateCateory({ UpdateProps }) {
  const PageText = {
    title: '카테고리 타이틀',
    des: '카테고리 설명',
    link: '카테고리 링크',
    ImageFile: '카테고리 이미지',
    linkDes: '카테고리 설명',
  };
  const { handleClose, isOpen, IdToUpdate } = UpdateProps;
  const updateState = {
    newTitle: '',
    newDescription: '',
    newLink: '',
    newImageDescription: '',
  };

  const [updatedCategory, setupdatedCategory] = useState(updateState);

  const { current: ItemId } = IdToUpdate;
  const { title, des, link, linkDes, ImageFile } = PageText;

  const { user } = useSelector((state) => state.auth);
  const { category, loading, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryTitle, categoryDescription, categoryLink, ImageDescription } =
    category;
  const { newTitle, newDescription, newLink, newImageDescription } =
    updatedCategory;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getSingleCategory(ItemId));
  }, [dispatch, ItemId]);

  const canTrigger = [newTitle, newDescription, newLink, newLink].every(
    Boolean
  );

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setupdatedCategory({ ...updatedCategory, [name]: value });
  };

  const handleClear = useCallback(() => {
    setupdatedCategory({
      newTitle: '',
      newDescription: '',
      newLink: '',
      imageFile: '',
      newImageDescription: '',
    });
  }, []);

  const registerForm = (data) => {
    console.log('before dispatch', {
      ItemId,
      updatedCategory,
      navigate,
      toast,
    });
    dispatch(
      updateSingleCategory({
        ItemId,
        updatedCategory,
        navigate,
        toast,
      })
    );
    handleClear();
    handleClose();

    console.log('data', data);
  };

  const closeModal = () => {
    handleClear();
    handleClose();
  };

  console.log('updateCategory', updatedCategory);

  return (
    <ModalFrame
      handleClose={handleClose}
      isOpen={isOpen}
      domId="update-category-modal"
    >
      {user && category && (
        <>
          <ModalHeader>
            <ModalTitle>카테고리 변경하기</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <ModalForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <ModalList>
                  {/* 카테고리 타이틀 */}
                  <ModalItem>
                    <AlignComponents>
                      <ModalHalf mr="10">
                        <FormLabel
                          htmlFor="newTitle"
                          mb={0}
                          mr={0}
                          fontSize={18}
                        >
                          {title}
                        </FormLabel>
                        <Input
                          id="newTitle"
                          type="text"
                          value={newTitle}
                          name="newTitle"
                          {...register('newTitle', {
                            required: '카테고리 타이틀 입력을 해주세요',
                            minLength: {
                              value: 2,
                              message: '최소입력 글자는 2글자입니다.',
                            },
                            onChange: onInputChange,
                          })}
                          size="sm"
                          variant="flushed"
                          color="teal"
                          fontSize="xs"
                          _placeholder={{ color: 'inherit' }}
                          autoComplete="off"
                        />
                        <FormErrorMessage as="p">
                          {errors?.newTitle && errors?.newTitle?.message}
                        </FormErrorMessage>
                      </ModalHalf>
                      <ModalHalf>
                        <ModalDesTitle>{`기존 ${title}`}</ModalDesTitle>
                        <ModalDesIndication>{categoryTitle}</ModalDesIndication>
                      </ModalHalf>
                    </AlignComponents>
                  </ModalItem>

                  {/* 카테고리 설명 */}
                  <ModalItem>
                    <AlignComponents>
                      <ModalHalf mr="10">
                        <FormLabel
                          htmlFor="newDescription"
                          mb={0}
                          mr={0}
                          fontSize={16}
                        >
                          {des}
                        </FormLabel>
                        <Textarea
                          id="newDescription"
                          value={newDescription}
                          name="newDescription"
                          {...register('newDescription', {
                            required: '카테고리에 대해 설명해주세요',
                            minLength: {
                              value: 10,
                              message: '최소입력 글자는 10글자입니다.',
                            },
                            onChange: onInputChange,
                          })}
                          size="sm"
                          fontSize="xs"
                          isRequired
                        />
                        <FormErrorMessage as="p">
                          {errors?.newDescription &&
                            errors?.newDescription?.message}
                        </FormErrorMessage>
                      </ModalHalf>
                      <ModalHalf>
                        <ModalDesTitle>{`기존 ${des}`}</ModalDesTitle>
                        <ModalDesIndication>
                          {categoryDescription}
                        </ModalDesIndication>
                      </ModalHalf>
                    </AlignComponents>
                  </ModalItem>

                  {/* 카테코리 링크 */}
                  <ModalItem>
                    <AlignComponents>
                      <ModalHalf mr="10">
                        <FormLabel
                          htmlFor="newLink"
                          mb={0}
                          mr={0}
                          fontSize={16}
                        >
                          {link}
                        </FormLabel>
                        <InputGroup size="sm">
                          <InputLeftAddon children="category/" />
                          <Input
                            id="newLink"
                            type="text"
                            value={newLink}
                            name="newLink"
                            {...register('newLink', {
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
                          {errors?.newLink && errors?.newLink?.message}
                        </FormErrorMessage>
                      </ModalHalf>
                      <ModalHalf>
                        <ModalDesTitle>{`기존 ${link}`}</ModalDesTitle>
                        <ModalDesIndication>{categoryLink}</ModalDesIndication>
                      </ModalHalf>
                    </AlignComponents>
                  </ModalItem>

                  {/* 카테고리 이미지 */}
                  <ModalItem>
                    <ModalHalf>
                      <FormLabel htmlFor="newLink" mb={0} mr={0} fontSize={16}>
                        {ImageFile}
                      </FormLabel>
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setupdatedCategory({
                            ...updatedCategory,
                            imageFile: base64,
                          })
                        }
                      />
                    </ModalHalf>
                  </ModalItem>
                  <ModalItem>
                    <AlignComponents>
                      <ModalHalf mr="10">
                        <FormLabel
                          htmlFor="newImageDescription"
                          mb={0}
                          mr={0}
                          fontSize={16}
                        >
                          {linkDes}
                        </FormLabel>
                        <Textarea
                          id="newImageDescription"
                          value={newImageDescription}
                          name="newImageDescription"
                          {...register('newImageDescription', {
                            required:
                              '카테고리 이미지에 대한 간략한 설명을 남겨주세요',
                            minLength: {
                              value: 10,
                              message: '최소입력 글자는 10글자입니다.',
                            },
                            onChange: onInputChange,
                          })}
                          size="sm"
                          fontSize="xs"
                          isRequired
                        />
                        <FormErrorMessage as="p">
                          {errors?.newImageDescription &&
                            errors?.newImageDescription?.message}
                        </FormErrorMessage>
                      </ModalHalf>
                      <ModalHalf>
                        <ModalDesTitle>{`기존 ${linkDes}`}</ModalDesTitle>
                        <ModalDesIndication>
                          {ImageDescription}
                        </ModalDesIndication>
                      </ModalHalf>
                    </AlignComponents>
                  </ModalItem>
                </ModalList>
                <ResetButton type="button" role="button" onClick={handleClear}>
                  초기화
                </ResetButton>
                <ModalAction>
                  <ModalSeconDaryBtn
                    type="button"
                    role="button"
                    onClick={closeModal}
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
      )}
    </ModalFrame>
  );
}

export default UpdateCateory;
