import { useState, useEffect, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Textarea,
  Input,
} from '@chakra-ui/react';
import FileBase from 'react-file-base64';
import defaultImg from '../../../Assets/Image/default-product-upload.png';
import { toast } from 'react-toastify';
import {
  SectionUnit,
  SectionLayout,
  SectionHeader,
  SectionTitle,
  SectionContent,
  FlexContainer,
  FlexAlignDiv,
  PForm,
  PFormContent,
  PFormUnit,
  PFormList,
  PFormBundle,
  PFormLi,
  PFormBlockTitle,
  PFormBlockTitleDes,
  PFormLiItem,
  PFormBlock,
  PFormDesWrapper,
  PFormDes,
  PFormDesList,
  PFormDesLi,
  TagWrapper,
  TagContainer,
  TagItem,
  TagItemDelete,
  TagInput,
  TagItemList,
  PButtonArea,
  PButtonList,
  PButtonLi,
} from './ProductUpload.style';
import { PFormButton } from '../../../Config/Styles/Button.style.js';
import {
  FormWrapper,
  SectionDivier,
} from '../../../Assets/Styles/Layout.style';
import { OffScreenSpan } from '../../../Assets/Styles/Basic.style';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';
import ProductReport from './ProductReport';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ncreateProduct } from '../../../Store/Features/NProductSlice';
import {
  getCategoryList,
  CategorySelector,
} from '../../../Store/Features/CategorySlice';
import ProductPostCode from './ProductPostCode';

const productSchema = {
  pdTitle: '',
  pdImage: '',
  pdPrice: '',
  pdDes: '',
  pdWish: '',
  pdType: '',
  pdBrand: '',
};

function FashionUpload() {
  const {
    category: { categories },
  } = useSelector(CategorySelector);

  const {
    user: {
      result: { imageFile, nickname },
    },
  } = useSelector((state) => state.auth);
  console.log('user', imageFile, nickname);

  const { ProductSize, ProductDegree, ProductStatus, error } = useSelector(
    (state) => state.nproduct
  );

  // console.log('제품등록 페이지에서 categories', categories);
  const categoryValue = Object.values(categories).map(
    ({ _id, categoryTitle }) => {
      console.log('1');
      return { id: _id, PdCategoryValue: categoryTitle };
    }
  );

  // console.log(categoryValue, categoryValue);

  const [pdInfo, setPdInfo] = useState(productSchema);
  const [pdCategory, setPdCategory] = useState('');
  const [prdSize, setPrdSize] = useState([{ pdSize: '', pdPriceBySize: '' }]);
  const [prdColor, setPrdColor] = useState([
    { pdColor: '', pdPriceByColor: '' },
  ]);
  const [prdStatus, setPrdStatus] = useState('');
  const [pdDegree, setPdDegree] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [isFmodalOpen, setIsFmodalOpen] = useState(false);

  const [tags, setTags] = useState([]);
  const [pdtags, setPdtags] = useState([]);

  const [pdAddress, setAddress] = useState('');
  const [inputAddressValue, setInputAddressValue] = useState(
    '우편주소 검색의 결과가 보이는 곳입니다.'
  );
  const [postModalOpen, setPostModalOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList({ toast }));
  }, []);

  useEffect(() => {
    if (isOpen === false) {
      setPostModalOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const changeAddressValue = () => {
      if (!pdAddress) return;
      if (pdAddress) {
        const {
          data: { zonecode },
          fullAddress,
        } = pdAddress;
        setInputAddressValue(`${fullAddress}, ${zonecode}`);
      }
    };
    changeAddressValue();
  }, [pdAddress]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      e.stopPropagation();
      setPdInfo({ ...pdInfo, [name]: value });
    },
    [pdInfo]
  );

  const addSize = useCallback(
    (e, index) => {
      const {
        target: { name, value },
      } = e;
      const list = [...prdSize];
      list[index][name] = value;
      setPrdSize(list);
    },
    [prdSize]
  );

  const removeSizeField = useCallback(
    (index) => {
      const list = [...prdSize];
      list.splice(index, 1);
      setPrdSize(list);
    },
    [prdSize]
  );

  const addSizeField = useCallback(() => {
    setPrdSize([...prdSize, { pdSize: '', pdPriceBySize: '' }]);
  }, [prdSize]);

  const addColor = useCallback(
    (e, index) => {
      const {
        target: { name, value },
      } = e;
      const list = [...prdColor];
      list[index][name] = value;
      setPrdColor(list);
    },
    [prdColor]
  );

  const addColorField = useCallback(() => {
    setPrdColor([...prdColor, { pdColor: '', pdPriceByColor: '' }]);
  }, [prdColor]);

  const removeColorField = useCallback(
    (index) => {
      const list = [...prdColor];
      list.splice(index, 1);
      setPrdColor(list);
    },
    [prdColor]
  );

  const selectCategory = useCallback((e) => {
    setPdCategory(e.target.value);
  }, []);

  const selectStatus = useCallback((e) => {
    setPrdStatus(e.target.value);
  }, []);

  const selectDegree = useCallback((e) => {
    setPdDegree(e.target.value);
  }, []);

  //상품 모달
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  //상품 모달
  const handleFirstModal = useCallback((e) => {
    e.preventDefault();
    setIsOpen((value) => !value);
    setIsFmodalOpen(true);
    setPostModalOpen(false);
  }, []);

  const handlePostModal = useCallback((e) => {
    e.preventDefault();
    setIsOpen((value) => !value);
    setIsFmodalOpen(false);
    setPostModalOpen(true);
  }, []);

  // 태그-1
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key !== 'Enter') return;
      const value = e.target.value;
      if (!value.trim()) return;
      setTags([...tags, value]);
      e.target.value = '';
      e.preventDefault();
    },
    [tags]
  );

  const removeTag = useCallback(
    (index) => {
      setTags(tags.filter((el, i) => i !== index));
    },
    [tags]
  );

  //해쉬태그
  const handleTags = useCallback(
    (e) => {
      if (e.key !== 'Enter') return;
      const value = e.target.value;
      if (!value.trim()) return;
      setPdtags([...pdtags, value]);
      e.target.value = '';
      e.preventDefault();
    },
    [pdtags]
  );

  const removePdTag = useCallback(
    (index) => {
      setPdtags(pdtags.filter((el, i) => i !== index));
    },
    [pdtags]
  );

  const { pdTitle, pdImage, pdPrice, pdDes, pdWish, pdBrand, pdType } = pdInfo;

  const filterLastItem = (data) => {
    if (!data) return;
    const convertArray = Object.values([...data]);
    let deleteLastItem = convertArray.filter(
      (item, index) => index < convertArray.length - 1
    );
    return deleteLastItem;
  };

  let prdSizeItem = filterLastItem(prdSize);
  let prdColorItem = filterLastItem(prdColor);

  const newProduct = useMemo(() => {
    return {
      pdCategory,
      pdUploaderNickname: nickname,
      pdUploaderImage: imageFile,
      pdBrand,
      pdType,
      pdTitle,
      pdImage,
      pdPrice,
      pdDes,
      pdWish,
      pdDegree,
      pdtags,
      inputAddressValue,
      pdStatus: [prdStatus, ...tags],
      pdSizeInfo: [...prdSizeItem],
      pdColorInfo: [...prdColorItem],
    };
  }, [
    pdCategory,
    nickname,
    imageFile,
    pdTitle,
    pdBrand,
    pdType,
    pdImage,
    pdPrice,
    pdDes,
    pdWish,
    pdDegree,
    pdtags,
    inputAddressValue,
    prdStatus,
    tags,
    prdSizeItem,
    prdColorItem,
  ]);

  console.log('newProduct', newProduct);

  // 상품모달
  const prReport = { handleClose, isOpen, newProduct };
  const postCode = { handleClose, isOpen, setAddress };

  const filledIn = [
    pdCategory,
    pdBrand,
    pdTitle,
    pdImage,
    pdPrice,
    pdDegree,
    prdStatus,
    pdWish,
    pdDes,
  ].every(Boolean);

  const canSubmit = pdtags.length !== 0 && filledIn;
  const checked = postModalOpen;
  console.log(
    'disabled',
    pdCategory,
    pdTitle,
    pdImage,
    pdPrice,
    pdDegree,
    prdStatus,
    pdWish,
    pdDes,
    pdtags,
    canSubmit
  );
  // console.log('pdInfo', newProduct);
  // console.log('userId', userId);
  // console.log('pdtags', pdtags.length);
  // console.log('postModalOpen', postModalOpen);
  console.log('1');
  console.log('pdAddress', pdAddress);
  console.log('addressRef', inputAddressValue);

  // console.log('zonecode', zonecode);
  // console.log('fullAddress', fullAddress);
  // console.log('refinedAddress', refinedAddress);

  const registerForm = useCallback(
    (event) => {
      dispatch(ncreateProduct({ newProduct, navigate, toast }));
    },
    [dispatch, navigate, newProduct]
  );

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <SectionTitle>상품 등록하기</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <PForm onSubmit={handleSubmit(registerForm)}>
            <FormControl isInvalid={errors}>
              <FlexContainer>
                <FlexAlignDiv fixed>
                  <PFormContent wd="530px">
                    {/* 상품 카테고리 */}
                    <PFormUnit>
                      <FormLabel htmlFor="pdCategory" fontWeight="bold">
                        상품 카테고리
                      </FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>*필수 입력사항입니다</PFormDes>
                          </PFormDesLi>
                          <PFormDesLi>
                            <PFormDes>상품의 카테고리를 선택해주세요</PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <Select
                        id="pdCategory"
                        name="pdCategory"
                        placeholder="상품의 카테고리를 입력해주세요"
                        value={pdCategory}
                        {...register('pdCategory', {
                          required: '상품의 카테고리를 선택해 주세요',
                          onChange: selectCategory,
                        })}
                      >
                        {categoryValue.map(({ id, PdCategoryValue }) => (
                          <option value={PdCategoryValue} key={id}>
                            {PdCategoryValue}
                          </option>
                        ))}
                      </Select>
                      <FormErrorMessage as="p">
                        {errors?.pdCategory && errors?.pdCategory?.message}
                      </FormErrorMessage>
                    </PFormUnit>

                    {/* 상품 이미지 */}
                    <PFormUnit>
                      <FormLabel htmlFor="PFormImg" fontWeight="bold">
                        상품 이미지
                      </FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>*필수 입력사항입니다</PFormDes>
                          </PFormDesLi>
                          <PFormDesLi>
                            <PFormDes>상품의 이미지를 선택해주세요</PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <ImageHolder>
                        <Image
                          src={pdImage ? pdImage : defaultImg}
                          alt="ddd"
                          id="PFormImg"
                        />
                      </ImageHolder>
                      <SectionDivier>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setPdInfo({ ...pdInfo, pdImage: base64 })
                          }
                        />
                      </SectionDivier>
                    </PFormUnit>

                    <PButtonArea>
                      <PButtonList>
                        <PButtonLi>
                          <PFormButton type="button" onClick={handleFirstModal}>
                            상품페이지 미리보기
                          </PFormButton>
                        </PButtonLi>
                        <PButtonLi>
                          <PFormButton
                            type="submit"
                            disabled={!canSubmit}
                            canSubmit={canSubmit}
                          >
                            상품 등록하기
                          </PFormButton>
                        </PButtonLi>
                      </PButtonList>
                    </PButtonArea>
                    <div className="" style={{ display: 'flex' }}></div>
                  </PFormContent>
                </FlexAlignDiv>

                <FlexAlignDiv>
                  <PFormContent wd="540px">
                    <fieldset>
                      <legend>
                        <OffScreenSpan>상품상세 입력</OffScreenSpan>
                      </legend>

                      {/* 상품명 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdTitle" fontWeight="bold">
                          상품명
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                상품의 이름을 정해주세요 (예: 히트상품 )
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Input
                          type="text"
                          id="pdTitle"
                          name="pdTitle"
                          {...register('pdTitle', {
                            required: '상품명을 입력해주세요',
                            onChange: onInputChange,
                          })}
                        />
                        <FormErrorMessage as="p">
                          {errors.pdTitle && errors.pdTitle.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      {/* 상품 브랜드 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdBrand" fontWeight="bold">
                          상품 브랜드
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                *상품의 브랜드명을 입력해주세요 (예:
                                애플,삼성,LG)
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Input
                          type="text"
                          id="pdBrand"
                          name="pdBrand"
                          {...register('pdBrand', {
                            required: '상품의 브랜드명을 입력해주세요',
                            onChange: onInputChange,
                          })}
                        />
                        <FormErrorMessage as="p">
                          {errors.pdBrand && errors.pdBrand.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      {/* 상품 타입 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdType" fontWeight="bold">
                          상품 타입
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                *상품의 타입을 입력해주세요 (예: 컴퓨터, 노트북,
                                핸드폰, 아이폰,)
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Input
                          type="text"
                          id="pdType"
                          name="pdType"
                          {...register('pdType', {
                            required: '상품의 브랜드명을 입력해주세요',
                            onChange: onInputChange,
                          })}
                        />
                        <FormErrorMessage as="p">
                          {errors.pdType && errors.pdType.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      {/* 상품가격 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdPrice" fontWeight="bold">
                          상품가격
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                희망하는 상품의 가격을 입력해주세요
                              </PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                '원' 단위은 제외하고 입력해주세요 (예: 10000원
                                <OffScreenSpan>에서</OffScreenSpan> &rarr; 10000{' '}
                                <OffScreenSpan>
                                  으로 화폐단위를 삭제하여 입력해주세요
                                </OffScreenSpan>
                                )
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Input
                          type="number"
                          id="pdPrice"
                          name="pdPrice"
                          autoComplete="off"
                          {...register('pdPrice', {
                            required: '상품 가격을 입력해주세요',
                            maxLength: {
                              value: 7,
                              message: '최대입력 자릿수는 7글자입니다.',
                            },
                            onChange: onInputChange,
                          })}
                        />
                        <FormErrorMessage as="p">
                          {errors.pdPrice && errors.pdPrice.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      {/* 상품소개 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdDes" fontWeight="bold">
                          상품소개
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                상품에 대한 소개글을 남겨주세요
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Textarea
                          placeholder="예 : 00에 장점이 있습니다"
                          id="pdDes"
                          name="pdDes"
                          size="sm"
                          resize="none"
                          {...register('pdDes', {
                            required: '상품의 소개를 입력해주세요',
                            onChange: onInputChange,
                          })}
                        />
                        <FormErrorMessage as="p">
                          {errors?.pdDes && errors?.pdDes?.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      {/* 상품 해쉬태그 */}
                      <PFormUnit>
                        <FormLabel fontWeight="bold">상품 해쉬태그</FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                '#'은 제외하고 '텍스트'만 입력해주세요
                              </PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                등록상품에 대해서 홍보랑 태그를 적어주세요
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <TagWrapper>
                          <TagContainer>
                            <TagItemList>
                              {pdtags.map((tag, index) => (
                                <TagItem key={index}>
                                  <span className="text">{tag}</span>
                                  <TagItemDelete
                                    onClick={() => removePdTag(index)}
                                  >
                                    &times;
                                  </TagItemDelete>
                                </TagItem>
                              ))}
                            </TagItemList>
                            <FormWrapper>
                              <TagInput
                                type="text"
                                onKeyPress={handleTags}
                                placeholder="상품에 대한 태그를 입력해주세요 (예: 신상)"
                              />
                            </FormWrapper>
                          </TagContainer>
                        </TagWrapper>
                      </PFormUnit>

                      {/* 상품단계 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdDegree" fontWeight="bold">
                          상품단계
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                등록하려는 상품의 상태의 단계를 선택해 주세요
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Select
                          id="pdDegree"
                          name="pdDegree"
                          placeholder="상품의 상태를 선택해 주세요"
                          value={pdDegree}
                          {...register('pdDegree', {
                            required: '상품의 상태를 선택해 주세요',
                            onChange: selectDegree,
                          })}
                        >
                          {ProductDegree.map(({ value, id }) => (
                            <option value={value} key={id}>
                              {value}
                            </option>
                          ))}
                        </Select>
                        <FormErrorMessage as="p">
                          {errors?.pdDegree && errors?.pdDegree?.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      {/* 상품상태 설명 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdStatus" fontWeight="bold">
                          상품상태 설명
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>
                                *필수 입력사항입니다 (단, 태그 부분은
                                제외입니다.)
                              </PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                등록하려는 상품의 상태에 해당하는 내용을
                                선택해주세요
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Select
                          id="pdStatus"
                          name="pdStatus"
                          placeholder="상품상태의 단계를 선택해 주세요"
                          value={prdStatus}
                          {...register('pdStatus', {
                            required: '상품상태의 단계를 선택해 주세요',
                            onChange: selectStatus,
                          })}
                        >
                          {ProductStatus.map(({ id, value }) => (
                            <option key={id} value={value}>
                              {value}
                            </option>
                          ))}
                        </Select>
                        <FormErrorMessage as="p">
                          {errors?.pdStatus && errors?.pdStatus?.message}
                        </FormErrorMessage>

                        <PFormDesWrapper style={{ marginTop: '10px' }}>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>
                                추가적으로 덧붙이고 싶은 내용을 입력해주세요
                              </PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                내용 작성 후 엔터를 입력해주세요
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <TagWrapper>
                          <TagContainer>
                            <TagItemList>
                              {tags.map((tag, index) => (
                                <TagItem key={index}>
                                  <span className="text">{tag}</span>
                                  <TagItemDelete
                                    onClick={() => removeTag(index)}
                                  >
                                    &times;
                                  </TagItemDelete>
                                </TagItem>
                              ))}
                            </TagItemList>
                            <FormWrapper>
                              <TagInput
                                type="text"
                                onKeyPress={handleKeyDown}
                                placeholder="내용을 입력해주세요"
                              />
                            </FormWrapper>
                          </TagContainer>
                        </TagWrapper>
                      </PFormUnit>

                      {/* 상품희망사항 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdWish" fontWeight="bold">
                          상품 희망사항
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>*필수 입력사항입니다</PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                상품에 대해 희망사항을 입력해주세요
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <Textarea
                          placeholder="예 : 배송 관련해서는 직접 옮기셔야 합니다."
                          id="pdWish"
                          name="pdWish"
                          size="sm"
                          resize="none"
                          autoComplete="off"
                          {...register('pdWish', {
                            required: '배송 관련해 희망사항을 입력해주세요',
                            onChange: onInputChange,
                          })}
                        />
                      </PFormUnit>

                      {/* 상품거래 희망주소 입력 */}
                      <PFormUnit>
                        <FormLabel htmlFor="pdAddress" fontWeight="bold">
                          상품거래 희망주소
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
                            <PFormDesLi>
                              <PFormDes>
                                상품거래를 희망하는 주소를 입력해주세요
                              </PFormDes>
                            </PFormDesLi>
                            <PFormDesLi>
                              <PFormDes>
                                해당폼은 선택하신 주소를 확인하는 용도로 직접
                                변경이 불가능합니다. 우편번호검색 버튼으로
                                변경해주세요
                              </PFormDes>
                            </PFormDesLi>
                          </PFormDesList>
                        </PFormDesWrapper>
                        <PFormLiItem>
                          <Input
                            type="text"
                            id="pdAddress"
                            name="pdAddress"
                            value={inputAddressValue}
                            disabled
                            width="400px"
                            {...register('pdAddress', {})}
                          />
                          <PFormButton
                            type="button"
                            onClick={handlePostModal}
                            checked={checked}
                            style={{ marginTop: '0px', marginLeft: 'auto' }}
                          >
                            우편주소 검색
                          </PFormButton>
                        </PFormLiItem>
                        <FormErrorMessage as="p">
                          {errors.pdAddress && errors.pdAddress.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      {/* 입력 선택부분, 사이즈 별 제품가격 */}
                      <PFormBlock>
                        <PFormBlockTitle>
                          사이즈 별 제품 가격
                          <PFormBlockTitleDes>
                            (*선택입력사항)
                          </PFormBlockTitleDes>
                        </PFormBlockTitle>
                        <PFormList>
                          {prdSize.map(({ pdSize, pdPriceBySize }, index) => (
                            <PFormLi key={index}>
                              <PFormLiItem>
                                <PFormBundle>
                                  <PFormUnit>
                                    <FormLabel
                                      htmlFor="pdSize"
                                      mt="10px"
                                      fontWeight="bold"
                                    >
                                      상품 사이즈
                                    </FormLabel>
                                    <PFormDesWrapper>
                                      <PFormDesList>
                                        <PFormDesLi>
                                          <PFormDes>
                                            상품의 사이즈 별 가격을 입력할 수
                                            있습니다.
                                          </PFormDes>
                                        </PFormDesLi>
                                      </PFormDesList>
                                    </PFormDesWrapper>
                                    <Select
                                      id="pdSize"
                                      name="pdSize"
                                      placeholder="상품의 사이즈를 입력해주세요"
                                      value={pdSize}
                                      onChange={(e) => addSize(e, index)}
                                    >
                                      {ProductSize.map(({ id, value }) => (
                                        <option value={value} key={id}>
                                          {value}
                                        </option>
                                      ))}
                                    </Select>
                                  </PFormUnit>
                                  <PFormUnit>
                                    <FormLabel
                                      htmlFor="pdPriceBySize"
                                      mt="10px"
                                      fontWeight="bold"
                                    >
                                      사이즈 별 제품가격
                                    </FormLabel>
                                    <PFormDesWrapper>
                                      <PFormDesList>
                                        <PFormDesLi>
                                          <PFormDes>
                                            해당 사이즈에 따른 가격을
                                            입력해주세요
                                          </PFormDes>
                                        </PFormDesLi>
                                        <PFormDesLi>
                                          <PFormDes>
                                            '원' 단위은 제외하고 입력해주세요
                                            (예: 10000원
                                            <OffScreenSpan>
                                              에서
                                            </OffScreenSpan>{' '}
                                            &rarr; 10000{' '}
                                            <OffScreenSpan>
                                              으로 화폐단위를 삭제하여
                                              입력해주세요
                                            </OffScreenSpan>
                                            )
                                          </PFormDes>
                                        </PFormDesLi>
                                      </PFormDesList>
                                    </PFormDesWrapper>
                                    <Input
                                      type="number"
                                      id="pdPriceBySize"
                                      name="pdPriceBySize"
                                      autoComplete="off"
                                      value={pdPriceBySize}
                                      onChange={(e) => addSize(e, index)}
                                    />
                                    <FormErrorMessage as="p">
                                      {errors?.pdPriceBySize &&
                                        errors?.pdPriceBySize?.message}
                                    </FormErrorMessage>
                                  </PFormUnit>
                                </PFormBundle>
                                {prdSize.length - 1 === index && (
                                  <PFormButton
                                    type="button"
                                    onClick={addSizeField}
                                    className="add-btn"
                                  >
                                    등록
                                  </PFormButton>
                                )}
                              </PFormLiItem>
                              {prdSize.length !== 1 && (
                                <PFormButton
                                  type="button"
                                  onClick={() => removeSizeField(index)}
                                  className="remove-btn"
                                >
                                  Remove
                                </PFormButton>
                              )}
                            </PFormLi>
                          ))}
                        </PFormList>
                      </PFormBlock>

                      {/* 입력 선택부분, 색상 별 제품가격 */}
                      <PFormBlock>
                        <PFormBlockTitle>
                          색상 별 제품 가격
                          <PFormBlockTitleDes>
                            (*선택입력사항)
                          </PFormBlockTitleDes>
                        </PFormBlockTitle>
                        <PFormList>
                          {prdColor.map(
                            ({ pdColor, pdPriceByColor }, index) => (
                              <PFormLi key={index}>
                                <PFormLiItem>
                                  <PFormBundle>
                                    <PFormUnit>
                                      <FormLabel
                                        htmlFor="pdColor"
                                        mt="10px"
                                        fontWeight="bold"
                                      >
                                        상품 색상
                                      </FormLabel>
                                      <PFormDesWrapper>
                                        <PFormDesList>
                                          <PFormDesLi>
                                            <PFormDes>
                                              상품의 색상 별 가격을 입력할 수
                                              있습니다.
                                            </PFormDes>
                                          </PFormDesLi>
                                        </PFormDesList>
                                      </PFormDesWrapper>
                                      <Input
                                        type="text"
                                        id="pdColor"
                                        name="pdColor"
                                        value={pdColor}
                                        autoComplete="off"
                                        onChange={(e) => addColor(e, index)}
                                      />
                                      <FormErrorMessage as="p">
                                        {errors?.pdColor &&
                                          errors?.pdColor?.message}
                                      </FormErrorMessage>
                                    </PFormUnit>
                                    <PFormUnit>
                                      <FormLabel
                                        htmlFor="pdPriceByColor"
                                        mt="10px"
                                        fontWeight="bold"
                                      >
                                        색상 별 제품가격
                                      </FormLabel>
                                      <PFormDesWrapper>
                                        <PFormDesList>
                                          <PFormDesLi>
                                            <PFormDes>
                                              해당 색상에 따른 가격을
                                              입력해주세요
                                            </PFormDes>
                                          </PFormDesLi>
                                          <PFormDesLi>
                                            <PFormDes>
                                              '원' 단위은 제외하고 입력해주세요
                                              (예: 10000원
                                              <OffScreenSpan>
                                                에서
                                              </OffScreenSpan>{' '}
                                              &rarr; 10000{' '}
                                              <OffScreenSpan>
                                                으로 화폐단위를 삭제하여
                                                입력해주세요
                                              </OffScreenSpan>
                                              )
                                            </PFormDes>
                                          </PFormDesLi>
                                        </PFormDesList>
                                      </PFormDesWrapper>
                                      <Input
                                        type="number"
                                        id="pdPriceByColor"
                                        name="pdPriceByColor"
                                        value={pdPriceByColor}
                                        autoComplete="off"
                                        onChange={(e) => addColor(e, index)}
                                      />
                                      <FormErrorMessage as="p">
                                        {errors?.pdPriceByColor &&
                                          errors?.pdPriceByColor?.message}
                                      </FormErrorMessage>
                                    </PFormUnit>
                                  </PFormBundle>
                                  {prdColor.length - 1 === index && (
                                    <PFormButton
                                      type="button"
                                      onClick={addColorField}
                                      className="add-btn"
                                    >
                                      등록
                                    </PFormButton>
                                  )}
                                </PFormLiItem>
                                {prdColor.length !== 1 && (
                                  <PFormButton
                                    type="button"
                                    onClick={() => removeColorField(index)}
                                    className="remove-btn"
                                  >
                                    Remove
                                  </PFormButton>
                                )}
                              </PFormLi>
                            )
                          )}
                        </PFormList>
                      </PFormBlock>
                    </fieldset>
                  </PFormContent>
                </FlexAlignDiv>
              </FlexContainer>
            </FormControl>
          </PForm>
          {isFmodalOpen && <ProductReport prReport={prReport} />}
          {postModalOpen && <ProductPostCode postCode={postCode} />}
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default FashionUpload;
