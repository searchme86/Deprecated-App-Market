import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import ChipInput from 'material-ui-chip-input';
import FileBase from 'react-file-base64';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { saveUp } from '../../Store/Features/ProductSlice';

const initialState = {
  //아이템 이름
  itemTitle: '',
  //아이템이 속한 카테고리
  itemCategory: '',
  //아이템 소개
  itemDescription: '',
  //아이템 관련한 해쉬태그
  itemHasTag: [],
};

function UploadProduct() {
  const [uploadData, setUploadData] = useState(initialState);
  const [tagErrMsg, setTagErrMsg] = useState(null);
  const { error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { itemTitle, itemCategory, itemDescription, itemHasTag } = uploadData;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUploadData({ ...uploadData, [name]: value });
  };

  const handleAddTag = (tag) => {
    setTagErrMsg(null);
    setUploadData({
      ...uploadData,
      itemHasTag: [...uploadData.itemHasTag, tag],
    });
  };

  const handleDeleteTag = (deleteTag) => {
    setUploadData({
      ...uploadData,
      itemHasTag: uploadData.itemHasTag.filter((tag) => tag !== deleteTag),
    });
  };

  const handleClear = () => {
    setUploadData({
      itemTitle: '',
      itemCategory: '',
      itemDescription: '',
      itemHasTag: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemHasTag.length) {
      setTagErrMsg('Please provide some tags');
    }
    if (itemTitle && itemCategory && itemDescription && itemHasTag) {
      dispatch(saveUp({ uploadData }));
    }
  };

  return (
    <div>
      <h1>UploadProduct</h1>
      <div
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '450px',
          alignContent: 'center',
          marginTop: '120px',
        }}
        className="container"
      >
        <MDBCard alignment="center">
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <MDBInput
                  placeholder="Enter Title"
                  type="text"
                  value={itemTitle || ''}
                  name="itemTitle"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide title"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  placeholder="Enter Description"
                  type="text"
                  value={itemDescription}
                  name="itemDescription"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  textarea
                  rows={4}
                  validation="Please provide description"
                />
              </div>
              <div className="col-md-12">
                <ChipInput
                  name="itemHasTag"
                  variant="outlined"
                  placeholder="Enter Tag"
                  fullWidth
                  value={itemHasTag}
                  onAdd={(tag) => handleAddTag(tag)}
                  onDelete={(tag) => handleDeleteTag(tag)}
                />
                {tagErrMsg && <div className="tagErrMsg">{tagErrMsg}</div>}
              </div>
              <div className="col-md-12">
                <MDBInput
                  placeholder="제품에 해당하는 카테고리는 무엇인가요?"
                  type="text"
                  value={itemCategory}
                  name="itemCategory"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  textarea
                  rows={4}
                  validation="카테고리 입력공간에 텍스트가 없습니다."
                />
              </div>
              <div className="d-flex justify-content-start">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setUploadData({ ...uploadData, imageFile: base64 })
                  }
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: '100%' }}>Submit</MDBBtn>
                <MDBBtn
                  style={{ width: '100%' }}
                  className="mt-2"
                  color="danger"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default UploadProduct;
