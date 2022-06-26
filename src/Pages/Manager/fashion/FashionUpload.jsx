import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Text,
  Textarea,
  Input,
} from '@chakra-ui/react';
import FileBase from 'react-file-base64';
import defaultImg from '../../../Assets/Image/default-product-upload.png';
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
} from './ProductUpload.style';
import { PFormButton } from '../../../Config/Styles/Button.style.js';
import {
  FormWrapper,
  SectionDivier,
} from '../../../Assets/Styles/Layout.style';
import { OffScreenSpan } from '../../../Assets/Styles/Basic.style';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';

function FashionUpload() {
  const productSchema = {
    pdTitle: '',
    pdImage: '',
    pdPrice: '',
    pdDes: '',
  };

  const ProductSize = [
    {
      id: 0,
      value: 'XS(85)',
    },
    {
      id: 1,
      value: 'S(90)',
    },
    {
      id: 2,
      value: 'M(95)',
    },
    {
      id: 3,
      value: 'L(100)',
    },
    {
      id: 4,
      value: 'XL(105)',
    },
    {
      id: 5,
      value: 'XXL(110)',
    },
  ];
  const ProductCategory = [
    {
      id: 0,
      value: '가전',
    },
    {
      id: 1,
      value: '가구',
    },
    {
      id: 2,
      value: '아동',
    },
    {
      id: 3,
      value: '식품',
    },
  ];
  const [pdInfo, setPdInfo] = useState(productSchema);
  const [pdCategory, setPdCategory] = useState('');
  const [prdSize, setPrdSize] = useState([{ pdSize: '', pdPriceBySize: '' }]);
  const [prdColor, setPrdColor] = useState([
    { pdColor: '', pdPriceByColor: '' },
  ]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPdInfo({ ...pdInfo, [name]: value });
  };

  const addSize = (e, index) => {
    const {
      target: { name, value },
    } = e;
    const list = [...prdSize];
    list[index][name] = value;
    setPrdSize(list);
  };

  const removeSizeField = (index) => {
    const list = [...prdSize];
    list.splice(index, 1);
    setPrdSize(list);
  };

  const addSizeField = () => {
    setPrdSize([...prdSize, { pdSize: '', pdPriceBySize: '' }]);
  };

  const addColor = (e, index) => {
    const {
      target: { name, value },
    } = e;
    const list = [...prdColor];
    list[index][name] = value;
    setPrdColor(list);
  };

  const addColorField = () => {
    setPrdColor([...prdColor, { pdColor: '', pdPriceByColor: '' }]);
  };

  const removeColorField = (index) => {
    const list = [...prdColor];
    list.splice(index, 1);
    setPrdColor(list);
  };

  const selectCategory = (e) => {
    setPdCategory(e.target.value);
  };

  const { pdTitle, pdImage, pdPrice, pdDes } = pdInfo;

  // console.log('pdCategory', pdCategory);
  // console.log('pdInfo', pdInfo);
  // console.log('prdSize', prdSize);
  // console.log('prdColor', prdColor);

  const upload = {
    pdCategory,
    pdTitle,
    pdImage,
    pdPrice,
    pdDes,
    pdSizeInfo: { ...prdSize },
    pdColorInfo: { ...prdColor },
  };

  console.log('upload', upload);

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <SectionTitle>상품 등록하기</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <PForm>
            <FormControl>
              <FlexContainer>
                <FlexAlignDiv fixed>
                  <PFormContent wd="530px">
                    <PFormUnit>
                      <FormLabel htmlFor="pdCategory" fontWeight="bold">
                        상품 카테고리
                      </FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>상품의 카테고리를 선택해주세요</PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <FormWrapper>
                        <Select
                          id="pdCategory"
                          name="pdCategory"
                          placeholder="상품의 카테고리를 입력해주세요"
                          value={pdCategory}
                          onChange={selectCategory}
                        >
                          {ProductCategory.map(({ id, value }) => (
                            <option value={value} key={id}>
                              {value}
                            </option>
                          ))}
                        </Select>
                      </FormWrapper>
                    </PFormUnit>
                    <PFormUnit>
                      <FormLabel htmlFor="PFormImg" fontWeight="bold">
                        상품 이미지
                      </FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
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
                    <div className="" style={{ display: 'flex' }}>
                      <PFormButton
                        right
                        type="submit"
                        style={{ marginLeft: 'auto' }}
                      >
                        상품 등록하기
                      </PFormButton>
                    </div>
                  </PFormContent>
                </FlexAlignDiv>

                <FlexAlignDiv>
                  <PFormContent wd="540px">
                    <fieldset>
                      <legend>
                        <OffScreenSpan>상품상세 입력</OffScreenSpan>
                      </legend>

                      <PFormUnit>
                        <FormLabel htmlFor="pdTitle" fontWeight="bold">
                          상품명
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
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
                          onChange={onInputChange}
                        />
                        <FormErrorMessage as="p">
                          {errors.pdTitle && errors.pdTitle.message}
                        </FormErrorMessage>
                      </PFormUnit>

                      <PFormUnit>
                        <FormLabel htmlFor="pdDes" fontWeight="bold">
                          상품소개
                        </FormLabel>

                        <PFormDesWrapper>
                          <PFormDesList>
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
                          onChange={onInputChange}
                        />
                      </PFormUnit>

                      <PFormUnit>
                        <FormLabel htmlFor="pdPrice" fontWeight="bold">
                          상품가격
                        </FormLabel>
                        <PFormDesWrapper>
                          <PFormDesList>
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
                          onChange={onInputChange}
                        />
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
                          {prdSize.map((singleService, index) => (
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
                                    <FormWrapper>
                                      <Select
                                        id="pdSize"
                                        name="pdSize"
                                        placeholder="상품의 사이즈를 입력해주세요"
                                        value={singleService.pdSize}
                                        onChange={(e) => addSize(e, index)}
                                      >
                                        {ProductSize.map(({ id, value }) => (
                                          <option value={value} key={id}>
                                            {value}
                                          </option>
                                        ))}
                                      </Select>
                                    </FormWrapper>
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
                                    <FormWrapper>
                                      <Input
                                        type="number"
                                        id="pdPriceBySize"
                                        name="pdPriceBySize"
                                        value={singleService.pdPriceBySize}
                                        onChange={(e) => addSize(e, index)}
                                      />
                                    </FormWrapper>
                                  </PFormUnit>
                                </PFormBundle>
                                {prdSize.length - 1 === index && (
                                  <PFormButton
                                    type="button"
                                    onClick={addSizeField}
                                    className="add-btn"
                                  >
                                    Add a Service
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
                          {prdColor.map((singleService, index) => (
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
                                      value={singleService.pdColor}
                                      onChange={(e) => addColor(e, index)}
                                    />
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
                                            해당 색상에 따른 가격을 입력해주세요
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
                                      type="text"
                                      id="pdPriceByColor"
                                      name="pdPriceByColor"
                                      value={singleService.pdPriceByColor}
                                      onChange={(e) => addColor(e, index)}
                                    />
                                  </PFormUnit>
                                </PFormBundle>
                                {prdColor.length - 1 === index && (
                                  <PFormButton
                                    type="button"
                                    onClick={addColorField}
                                    className="add-btn"
                                  >
                                    Add a Service
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
                          ))}
                        </PFormList>
                      </PFormBlock>
                    </fieldset>
                  </PFormContent>
                </FlexAlignDiv>
              </FlexContainer>
            </FormControl>
          </PForm>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default FashionUpload;
