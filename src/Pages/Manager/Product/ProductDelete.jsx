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
    <div>
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
            <div className="">
              <div
                className=""
                style={{
                  textAlign: 'center',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                <p style={{ fontSize: '21px' }}>
                  {' '}
                  상품, <strong style={{ fontSize: '21px' }}>
                    {name}
                  </strong>{' '}
                  을/를 삭제하시겠습니까?
                </p>
              </div>
              <ModalAction>
                <ModalSeconDaryBtn type="button" onClick={handleClose}>
                  취소
                </ModalSeconDaryBtn>
                <ModalPrimaryBtn type="button" onClick={() => handleDelete(id)}>
                  삭제
                </ModalPrimaryBtn>
              </ModalAction>
            </div>
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductDelete;
