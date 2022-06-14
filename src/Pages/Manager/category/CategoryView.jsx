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
        {categories.map((category) => (
          <li key={category._id}>
            <div className="">
              <div>
                <img src={category.imageFile} alt={category.categoryLink} />
              </div>
            </div>
            <p className="offscreen">{category.categoryDescription}</p>
            <strong>{category.categoryTitle}</strong>
          </li>
        ))}
      </ul>
    </CategoryWrapper>
  );
}

export default CategoryView;
