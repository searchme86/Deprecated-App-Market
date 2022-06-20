import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../../Assets/Image/cat01.jpeg';
import {
  SectionDivier,
  SectionContainer,
  AlignComponents,
  SectionHalf,
} from '../../../../Assets/Styles/Layout.style';
import { SectionTitle } from '../../../../Assets/Styles/Text.style.js';
import { OffScreen } from '../../../../Assets/Styles/Basic.style';

function MainAd() {
  return (
    <SectionDivier>
      <SectionTitle>
        <OffScreen>이번달 메인광고</OffScreen>
      </SectionTitle>
      <SectionContainer style={{ marginTop: '-10px' }}>
        <AlignComponents>
          <SectionHalf mr="32">
            <div className="img-wrapper">
              <img src={bg} alt="고양이" />
            </div>
          </SectionHalf>
          <SectionHalf>
            <div className="content-wrapper`">
              <div className="text-header">
                <h1>컨텐츠 타이틀</h1>
                <strong className="">서브타이틀</strong>
              </div>
              <div className="content-container">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatem qui nam ipsam dolore quam a adipisci eos repellat
                  maiores officia ratione corporis beatae, aliquam amet odit
                  natus cum. Velit, rerum?
                </p>
                <div className="">
                  <Link to={'/'}>ddd</Link>
                </div>
              </div>
            </div>
          </SectionHalf>
        </AlignComponents>
      </SectionContainer>
    </SectionDivier>
  );
}

export default MainAd;
