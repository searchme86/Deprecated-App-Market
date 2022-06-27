import { FormControl } from '@chakra-ui/react';
import React from 'react';
import {
  ModalAction,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
  ModalTitle,
} from '../../../Components/Modal/Modal.style';
import ModalFrame from '../../../Components/Modal/ModalFrame';

function ProductModal({ prModal }) {
  const { handleClose, isOpen } = prModal;

  return (
    <div>
      <ModalFrame
        handleClose={handleClose}
        isOpen={isOpen}
        domId="product-submit-modal"
      >
        <>
          <ModalContent>
            <ModalForm>
              <FormControl>
                <div>
                  <div
                    className=""
                    style={{ textAlign: 'center', margin: '30px 0 20px 0' }}
                  >
                    <p style={{ fontSize: '18px' }}>상품을 등록하시겠습니까?</p>
                  </div>
                  <ModalAction>
                    <ModalSeconDaryBtn>취소</ModalSeconDaryBtn>
                    <ModalPrimaryBtn>등록</ModalPrimaryBtn>
                  </ModalAction>
                </div>
              </FormControl>
            </ModalForm>
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductModal;
