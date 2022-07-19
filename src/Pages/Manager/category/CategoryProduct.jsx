import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ProductSelector,
  getCateProduct,
} from '../../../Store/Features/NProductSlice';
import {
  SectionContent,
  SectionLayout,
  SectionTitle,
  SectionTitleDes,
  SectionUnit,
} from '../Product/ProductUpload.style';
import CardProduct from '../../../Components/CardProduct/CardProduct';
import { ProductLayOut } from '../../SectionProduct.style';

function CategoryProduct() {
  const {
    product: {
      category: { categoryItem },
    },
  } = useSelector(ProductSelector);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    id && dispatch(getCateProduct({ id }));
  }, []);

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>{id}</SectionTitle>
        <SectionTitleDes style={{ marginLeft: '100px' }}>
          카테고리 상품을 확인할 수 있습니다.
        </SectionTitleDes>
        <SectionContent>
          {categoryItem.length > 0 ? (
            <ProductLayOut style={{ marginTop: '34px' }}>
              {categoryItem.map((item, index) => (
                <CardProduct key={item._id} {...item} />
              ))}
            </ProductLayOut>
          ) : (
            <p>해당 카테고리의 제품이 존재하지 않습니다.</p>
          )}
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default CategoryProduct;
