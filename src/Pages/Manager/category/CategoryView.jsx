import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
import { deleteCategory } from '../../../Store/Features/CategorySlice';
import CategoryModal from './CategoryModal/CategoryModal';

function CategoryView({ categories }) {
  console.log('categories', categories);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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

  return (
    <CategoryWrapper>
      {user ? (
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
          <CategoryModal handleClose={handleClose} isOpen={isOpen} />
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
                  {user ? <div></div> : ''}
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
