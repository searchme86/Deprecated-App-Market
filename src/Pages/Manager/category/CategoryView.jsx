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
  SectionDivier,
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

function CategoryView({ categories }) {
  console.log('categories', categories);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deleteCategory = (e) => {
    e.preventDefault();
    console.log('삭제됐습니다.');
  };

  const updateCategory = (e) => {
    e.preventDefault();
    console.log('업데이트 됐습니다.');
  };

  return (
    <SectionDivier>
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
                          radius={'16px'}
                        />
                      </ImageHolder>
                      <ContentDivider>
                        <OffScreen>{categoryDescription}</OffScreen>
                        <CategoryTitle>{categoryTitle}</CategoryTitle>
                      </ContentDivider>
                      {user ? <div></div> : ''}
                    </Link>
                    <ContentDivider>
                      <AlignList>
                        <FunctionList>
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ fontSize: 30 }}
                            onClick={updateCategory}
                          />
                        </FunctionList>
                        <FunctionList>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            style={{ fontSize: 30 }}
                            onClick={deleteCategory}
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
    </SectionDivier>
  );
}

export default CategoryView;
