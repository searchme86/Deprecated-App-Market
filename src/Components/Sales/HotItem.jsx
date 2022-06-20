import React from 'react';
import {
  HotItemFunction,
  HotItemhref,
  HotItemLi,
  HotItemTitle,
} from './HotItem.style';
import { Image, ImageHolder } from '../../Assets/Styles/Image.style';
import { HotItemButton } from '../../Config/Styles/Button.style';

function HotItem({ item }) {
  return (
    <>
      <HotItemLi>
        <HotItemhref to={`/products/${item.cat}`}>
          <ImageHolder height="650px">
            <Image src={item.img} />
          </ImageHolder>
          <HotItemFunction>
            <HotItemTitle>{item.title}</HotItemTitle>
            <HotItemButton>SHOP NOW</HotItemButton>
          </HotItemFunction>
        </HotItemhref>
      </HotItemLi>
    </>
  );
}

export default HotItem;
