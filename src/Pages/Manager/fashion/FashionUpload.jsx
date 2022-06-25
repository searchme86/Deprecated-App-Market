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
    <div>
      <h1>상품 등록하기</h1>
      <div className="" style={{ marginLeft: '40px' }}>
        <form>
          <FormControl>
            <div className="" style={{ display: 'flex' }}>
              <div className="" style={{ marginRight: '100px' }}>
                <div className="">
                  <FormLabel htmlFor="pdCategory">상품 카테고리</FormLabel>
                  <div className="">
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
                  </div>
                </div>
                <legend>상품 이미지</legend>
                <div className="">
                  <img src={pdImage ? pdImage : defaultImg} alt="ddd" />
                </div>
                <div className="">
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setPdInfo({ ...pdInfo, pdImage: base64 })
                    }
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <fieldset>
                    <legend>상품상세 입력</legend>
                    <div className="">
                      <div className="">
                        <FormLabel htmlFor="pdTitle">상품명</FormLabel>
                        <div className="">
                          <Input
                            type="text"
                            id="pdTitle"
                            name="pdTitle"
                            onChange={onInputChange}
                          />
                          <FormErrorMessage as="p">
                            {errors.pdTitle && errors.pdTitle.message}
                          </FormErrorMessage>
                        </div>
                      </div>
                      <div className="">
                        <Text mb="8px" as="label" htmlFor="pdDes">
                          상품소개
                        </Text>
                        <Textarea
                          placeholder="Here is a sample placeholder"
                          name="pdDes"
                          size="sm"
                          onChange={onInputChange}
                        />
                      </div>
                      <div className="">
                        <FormLabel htmlFor="pdPrice"> 상품가격 </FormLabel>
                        <div className="">
                          <Input
                            type="number"
                            id="pdPrice"
                            name="pdPrice"
                            onChange={onInputChange}
                          />
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          border: '4px solid red',
                          marginTop: '10px',
                        }}
                      >
                        <span>사이즈 별 제품 가격</span>
                        {prdSize.map((singleService, index) => (
                          <div
                            key={index}
                            className="services"
                            style={{ display: 'flex' }}
                          >
                            <div className="first-division">
                              <div className="">
                                <FormLabel htmlFor="pdSize">
                                  상품 사이즈
                                </FormLabel>
                                <div className="">
                                  <Select
                                    id="pdSize"
                                    name="pdSize"
                                    placeholder="상품의 사이즈를 입력해주세요"
                                    value={singleService.pdSize}
                                    onChange={(e) => addSize(e, index)}
                                    required
                                  >
                                    {ProductSize.map(({ id, value }) => (
                                      <option value={value} key={id}>
                                        {value}
                                      </option>
                                    ))}
                                  </Select>
                                </div>
                              </div>
                              <div className="">
                                <FormLabel htmlFor="pdPriceBySize">
                                  사이즈 별 제품가격
                                </FormLabel>
                                <div className="">
                                  <Input
                                    type="text"
                                    id="pdPriceBySize"
                                    name="pdPriceBySize"
                                    value={singleService.pdPriceBySize}
                                    onChange={(e) => addSize(e, index)}
                                  />
                                </div>
                              </div>
                              <div className="">
                                {prdSize.length - 1 === index && (
                                  <button
                                    type="button"
                                    onClick={addSizeField}
                                    className="add-btn"
                                  >
                                    <span>Add a Service</span>
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="second-division">
                              {prdSize.length !== 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeSizeField(index)}
                                  className="remove-btn"
                                >
                                  <span>Remove</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/*  */}
                      <div
                        className=""
                        style={{ border: '4px solid blue', marginTop: '10px' }}
                      >
                        <span>색상 별 제품 가격</span>
                        {prdColor.map((singleService, index) => (
                          <div key={index} className="services">
                            <div className="first-division">
                              <div className="">
                                <label htmlFor="pdColor">상품 색상</label>
                                <div className="">
                                  <input
                                    type="text"
                                    id="pdColor"
                                    name="pdColor"
                                    value={singleService.pdColor}
                                    onChange={(e) => addColor(e, index)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="">
                                <label htmlFor="pdPriceByColor">
                                  색상 별 제품가격
                                </label>
                                <div className="">
                                  <input
                                    type="text"
                                    id="pdPriceByColor"
                                    name="pdPriceByColor"
                                    value={singleService.pdPriceByColor}
                                    onChange={(e) => addColor(e, index)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="">
                                {prdColor.length - 1 === index && (
                                  <button
                                    type="button"
                                    onClick={addColorField}
                                    className="add-btn"
                                  >
                                    <span>Add a Service</span>
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="second-division">
                              {prdColor.length !== 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeColorField(index)}
                                  className="remove-btn"
                                >
                                  <span>Remove</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className=""></div>
              </div>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default FashionUpload;
