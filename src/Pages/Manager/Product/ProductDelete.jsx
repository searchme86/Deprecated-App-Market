/**
 * 종류 : 모달
 * 기능 : 유저가 상품의 삭제버튼을 누르면, 상품의 실제 삭제여부를 선택할 수 있음
 * 구조 :
 *
 * 변수명
 * deleteModal
 * : 부모 컴포넌트(ProductDelete.jsx)에서 제공하는 prop
 * : 커스텀 모달 컴포넌트(<ModalFrame/>)에 필요한 prop을 의미하기도함
 * handleClose : 모달을 보이고/보이지 않게 하는 함수
 * isOpen :  모달의 상태(보이고/보이지않는)를 담는 변수
 * itemInfo : 부모 컴포넌트에서 전달하는 데이터(상품의 타이틀명, id)를 담고 있음(객체형태)
 * deleteProduct : 각 상품의 id를 입력받아 상품 데이터에서 삭제하는 리덕스 비동기 Thunk
 * handleDelete : 모달의 삭제버튼을 누르면 상품 id(id)를 받아 삭제하는 핸들러 함수
 * domId="delete-product-modal" : 커스텀 모달이 렌더링될 때, 모달의 돔(dom)에 부여되는 클래스명, 직접 변경가능
 *
 * **/

import React from 'react';
import {
  ModalAction,
  ModalContent,
  ModalHeader,
  ModalSeconDaryBtn,
  ModalTitle,
  ModalPrimaryBtn,
} from '../../../Components/Modal/Modal.style';
import ModalFrame from '../../../Components/Modal/ModalFrame';

import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../Store/Features/NProductSlice';

function ProductDelete({ deleteModal }) {
  const {
    handleClose,
    isOpen,
    itemInfo: { name, id },
  } = deleteModal;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (!id) return;
    id && dispatch(deleteProduct(id));
    handleClose();
  };

  return (
    <ModalFrame
      handleClose={handleClose}
      isOpen={isOpen}
      domId="delete-product-modal"
    >
      <>
        <ModalHeader>
          <ModalTitle>상품 삭제하기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <div
            className=""
            style={{
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            {name ? (
              <p style={{ fontSize: '21px' }}>
                {' '}
                상품, <strong style={{ fontSize: '21px' }}>
                  {name}
                </strong> 을/를 <br />
                삭제하시겠습니까?
              </p>
            ) : (
              <p style={{ fontSize: '21px' }}>
                유저의 상품이 없거나 이미 삭제된 상품입니다.
              </p>
            )}
          </div>
          <ModalAction>
            <ModalSeconDaryBtn type="button" onClick={handleClose}>
              취소
            </ModalSeconDaryBtn>
            <ModalPrimaryBtn type="button" onClick={() => handleDelete(id)}>
              삭제
            </ModalPrimaryBtn>
          </ModalAction>
        </ModalContent>
      </>
    </ModalFrame>
  );
}

export default ProductDelete;
