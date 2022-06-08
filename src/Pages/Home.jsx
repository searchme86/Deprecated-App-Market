import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getTours, setCurrentPage } from '../Store/Features/TourSlice';
import CardTour from '../Components/CardTour';
import Spinner from '../Components/Spinner';
import Pagination from '../Components/Pagination';

import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  //currentpage, numberOfPages는 서버에서 처리된 결괏값
  const { tours, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({
      ...state.tour,
    })
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get('searchQuery');
  const location = useLocation();

  useEffect(() => {
    //여기가 커런트 페이지 관련한 호출 부분
    //..Slice 갔다가 여기로 옴
    //이 디스패치는 currnetpage가 변경될 때 마다 호출된다.
    dispatch(getTours(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (loading) {
    return <Spinner />;
  }

  console.log('tours length', tours);

  return (
    <div
      style={{
        margin: 'auto',
        padding: '15px',
        maxWidth: '1000px',
        alignContent: 'center',
      }}
    >
      <MDBRow className="mt-5">
        {tours?.length === 0 && location.pathname === '/' && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Tours Found
          </MDBTypography>
        )}

        {tours?.length === 0 && location.pathname !== '/' && (
          <MDBTypography className="text-center mb-0" tag="h2">
            We couldn't find any matches for "{searchQuery}"
          </MDBTypography>
        )}

        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {tours &&
                tours.map((item) => <CardTour key={item._id} {...item} />)}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>

      {tours?.length > 0 && !searchQuery && (
        <Pagination
          setCurrentPage={setCurrentPage}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default Home;
