import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  CategoryItem,
  CategoryWrapper,
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
  deleteCategory,
  createCategory,
} from '../../../Store/Features/CategorySlice';
import CategoryModal from './CategoryModal/CategoryModal';

function CategoryView({ categories }) {
  const initialState = {
    categoryTitle: '',
    categoryDescription: '',
    categoryLink: '',
    ImageDescription: '',
  };

  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(initialState);

  const { user } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.category);
  const navigate = useNavigate();

  const { categoryTitle, categoryDescription, categoryLink, ImageDescription } =
    category;

  useEffect(() => {});

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const dispatch = useDispatch();

  // 부모에서 사용하는
  const handleModal = useCallback(() => {
    setIsOpen((value) => !value);
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

  const updateCategory = (_id) => {
    console.log('_id', _id);
    console.log('업데이트 됐습니다.');
  };

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
      console.log('카테고리 생성 후', { category, toast, navigate });
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

  console.log('categories', categories);
  console.log('canTrigger', canTrigger);
  console.log('category', category);

  return (
    <CategoryWrapper>
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
                      <ImageHolder>
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
                            // onClick={updateCategory}
                            onClick={handleModal}
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
            <CreateCategoryBtn onClick={handleModal}>
              <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: 50 }} />
            </CreateCategoryBtn>
          </AlignComponents>
          <CategoryModal ParentProps={ParentProps} />
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
    </CategoryWrapper>
  );
}

export default CategoryView;
