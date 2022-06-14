import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import FileBase from 'react-file-base64';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory } from '../../../Store/Features/CategorySlice';

function UploadCategory() {
  const initialState = {
    categoryTitle: '',
    categoryDescription: '',
    categoryLink: '',
  };

  const [category, setCategory] = useState(initialState);

  const { error } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const { categoryTitle, categoryDescription, categoryLink } = category;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleClear = () => {
    setCategory({
      categoryTitle: '',
      categoryDescription: '',
      categoryLink: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryTitle && categoryDescription && categoryLink) {
      dispatch(createCategory({ category, toast }));
      console.log({ category, toast });
      handleClear();
    }
  };

  return (
    <div className="">
      <h1>Category 관리 페이지</h1>
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
                  value={categoryTitle || ''}
                  name="categoryTitle"
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
                  value={categoryDescription}
                  name="categoryDescription"
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
                <MDBInput
                  placeholder="Enter categoryLink"
                  type="text"
                  value={categoryLink}
                  name="categoryLink"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  textarea
                  rows={4}
                  validation="Please provide categoryLink"
                />
              </div>
              <div className="d-flex justify-content-start">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setCategory({ ...category, imageFile: base64 })
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

export default UploadCategory;
