import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTour, getToursByUser } from '../Store/Features/TourSlice';
import Spinner from '../Components/Spinner';

import { toast } from 'react-toastify';

function Dashboard() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userTours, loading } = useSelector((state) => ({ ...state.tour }));
  //로그인한 유저의 아이디를 알아야 한다.
  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getToursByUser(userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const excerpt = (str) => {
    if (str.length > 40) {
      str = str.substring(0, 40) + ' ...';
    }
    return str;
  };

  if (loading) {
    return <Spinner />;
  }

  //tourSlic.js에서 정의한
  // //if (id) {
  //       state.userTours = state.userTours.filter((item) => item._id !== id);
  //       state.tours = state.tours.filter((item) => item._id !== id);
  //     }
  // 이것을 dashboard에서 사용한다.
  //여기서 id는 db에 있는 item의 id가 들어온다.
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this tour ?')) {
      dispatch(deleteTour({ id, toast }));
    }
  };

  return (
    <div
      style={{
        margin: 'auto',
        padding: '120px',
        maxWidth: '900px',
        alignContent: 'center',
      }}
    >
      {userTours.length === 0 && (
        <h3>No tour available with the user: {user?.result?.name}</h3>
      )}

      {userTours.length > 0 && (
        <>
          <h5 className="text-center">Dashboard: {user?.result?.name}</h5>
          <hr style={{ maxWidth: '570px' }} />
        </>
      )}

      {userTours &&
        userTours.map((item) => (
          <MDBCardGroup key={item._id}>
            <MDBCard style={{ maxWidth: '600px' }} className="mt-2">
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage
                    className="rounded"
                    src={item.imageFile}
                    alt={item.title}
                    fluid
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody>
                    <MDBCardTitle className="text-start">
                      {item.title}
                    </MDBCardTitle>
                    <MDBCardText className="text-start">
                      <small className="text-muted">
                        {excerpt(item.description)}
                      </small>
                    </MDBCardText>
                    <div
                      style={{
                        marginLeft: '5px',
                        float: 'right',
                        marginTop: '-60px',
                      }}
                    >
                      <MDBBtn className="mt-1" tag="a" color="none">
                        <MDBIcon
                          fas
                          icon="trash"
                          style={{ color: '#dd4b39' }}
                          size="lg"
                          onClick={() => handleDelete(item._id)}
                        />
                      </MDBBtn>
                      <Link to={`/editTour/${item._id}`}>
                        <MDBIcon
                          fas
                          icon="edit"
                          style={{ color: '#55acee', marginLeft: '10px' }}
                          size="lg"
                        />
                      </Link>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCardGroup>
        ))}
    </div>
  );
}

export default Dashboard;
