import React from 'react';
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

function CategoryView({ categories }) {
  console.log('categories', categories);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log('_id', id);
    console.log('삭제됐습니다.');
    dispatch(deleteCategory({ id, toast }));
  };

  const updateCategory = (_id) => {
    console.log('_id', _id);
    console.log('업데이트 됐습니다.');
  };

  return (
    <CategoryWrapper>
      {user ? (
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
                    {/* {user ? <div></div> : ''} */}
                  </Link>
                  <ContentDivider>
                    <AlignList>
                      <FunctionList>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          style={{ fontSize: 30, color: '#146ebe' }}
                          onClick={updateCategory}
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
          <CreateCategoryBtn to="/category">
            <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: 50 }} />
          </CreateCategoryBtn>
        </AlignComponents>
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
