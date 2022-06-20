import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  CategoryItem,
  CategoryTitle,
  CreateCategoryBtn,
  FunctionList,
} from './Category.style';
import { OffScreen } from '../../../Assets/Styles/Basic.style';
import {
  ListContainer,
  ContentDivider,
  AlignComponents,
  AlignList,
} from '../../../Assets/Styles/Layout.style';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import {
  createCategory,
  deleteCategory,
  // getSingleCategory,
} from '../../../Store/Features/CategorySlice';
import CategoryModal from './CategoryModal/CategoryModal';
import UpdateCateory from './CategoryModal/UpdateCateory';

function CategoryView({ categories }) {
  const IdToUpdate = useRef(null);
  const initialState = {
    categoryTitle: '',
    categoryDescription: '',
    categoryLink: '',
    ImageDescription: '',
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isFmodalOpen, setIsFmodalOpen] = useState(false);
  const [isSmodalOpen, setIsSmodalOpen] = useState(false);
  const [category, setCategory] = useState(initialState);

  const { user } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.category);
  const navigate = useNavigate();

  const { categoryTitle, categoryDescription, categoryLink, ImageDescription } =
    category;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const dispatch = useDispatch();

  // 부모에서 사용하는
  // 카테고리 등록하는 모달을 실행하는 핸들러
  const handleFirstModal = useCallback(() => {
    setIsOpen((value) => !value);
    setIsFmodalOpen(true);
    setIsSmodalOpen(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteCategory({ id, toast }));
    },
    [dispatch]
  );

  // 카테고리 업데이트하는 모달을 실행하는 핸들러
  const handleSecondModal = useCallback((_id) => {
    setIsOpen((value) => !value);
    setIsFmodalOpen(false);
    setIsSmodalOpen(true);
    IdToUpdate.current = _id;
  }, []);

  //자식에서 사용하는
  const onInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setCategory({ ...category, [name]: value });
    },
    [category]
  );

  const handleClear = useCallback(() => {
    setCategory({
      categoryTitle: '',
      categoryDescription: '',
      categoryLink: '',
      ImageDescription: '',
      imageFile: '',
    });
  }, []);

  const registerForm = useCallback(() => {
    if (
      categoryTitle &&
      categoryDescription &&
      categoryLink &&
      ImageDescription
    ) {
      dispatch(createCategory({ category, toast, navigate }));
      handleClear();
      handleClose();
    }
  }, [
    dispatch,
    navigate,
    category,
    categoryTitle,
    categoryDescription,
    categoryLink,
    ImageDescription,
    handleClear,
    handleClose,
  ]);

  const canTrigger = [
    categoryTitle,
    categoryDescription,
    categoryLink,
    ImageDescription,
  ].every(Boolean);

  const ParentProps = {
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
  };

  const UpdateProps = {
    handleClose,
    isOpen,
    IdToUpdate,
  };

  return (
    <>
      {user && categories ? (
        <>
          <AlignComponents>
            <ListContainer>
              {categories.map(
                ({
                  _id,
                  categoryTitle,
                  categoryDescription,
                  categoryLink,
                  imageFile,
                  ImageDescription,
                }) => (
                  <CategoryItem key={_id}>
                    <Link to={categoryLink}>
                      <ImageHolder height="150px">
                        <Image
                          src={imageFile}
                          alt={ImageDescription}
                          radius={'14px'}
                        />
                      </ImageHolder>
                      <ContentDivider>
                        <OffScreen>{categoryDescription}</OffScreen>
                        <CategoryTitle>{categoryTitle}</CategoryTitle>
                      </ContentDivider>
                    </Link>
                    <ContentDivider>
                      <AlignList>
                        <FunctionList>
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ fontSize: 30, color: '#146ebe' }}
                            onClick={() => handleSecondModal(_id)}
                          />
                        </FunctionList>
                        <FunctionList>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            style={{ fontSize: 30, color: '#ffd43b' }}
                            onClick={() => handleDelete(_id)}
                          />
                        </FunctionList>
                      </AlignList>
                    </ContentDivider>
                  </CategoryItem>
                )
              )}
            </ListContainer>
            <CreateCategoryBtn onClick={handleFirstModal}>
              <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: 50 }} />
            </CreateCategoryBtn>
          </AlignComponents>
          {isFmodalOpen && <CategoryModal ParentProps={ParentProps} />}
          {isSmodalOpen && <UpdateCateory UpdateProps={UpdateProps} />}
        </>
      ) : (
        <ListContainer>
          {categories.map(
            ({
              _id,
              categoryTitle,
              categoryDescription,
              categoryLink,
              imageFile,
              ImageDescription,
            }) => (
              <CategoryItem key={_id}>
                <Link to={categoryLink}>
                  <ImageHolder>
                    <Image
                      src={imageFile}
                      alt={ImageDescription}
                      radius={'16px'}
                    />
                  </ImageHolder>
                  <ContentDivider>
                    <OffScreen>{categoryDescription}</OffScreen>
                    <CategoryTitle>{categoryTitle}</CategoryTitle>
                  </ContentDivider>
                </Link>
              </CategoryItem>
            )
          )}
        </ListContainer>
      )}
    </>
  );
}

export default CategoryView;
