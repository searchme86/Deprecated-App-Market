import React from 'react';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { CategoryWrapper, Circle, Icon, Image, Info } from './Category.style';

function CategoryView({ categories }) {
  console.log('categories', categories);

  return (
    <CategoryWrapper>
      <h1>여기서부터 수정</h1>
      <ul>
        {categories.map(
          ({
            _id,
            categoryTitle,
            categoryDescription,
            categoryLink,
            imageFile,
          }) => (
            <li key={_id}>
              <div className="">
                <div>
                  <img src={imageFile} alt={categoryLink} />
                </div>
              </div>
              <p className="offscreen">{categoryDescription}</p>
              <strong>{categoryTitle}</strong>
            </li>
          )
        )}
      </ul>
    </CategoryWrapper>
  );
}

export default CategoryView;
