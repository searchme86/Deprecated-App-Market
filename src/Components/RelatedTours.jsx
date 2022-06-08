import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { excerpt } from '../Config/Utility';

// tourId는 사실 현재 current아이템의 Id와 같은 의미임
function RelatedTour({ relatedTours, tourId }) {
  return (
    <>
      {relatedTours && relatedTours?.length > 0 && (
        <>
          {/* 1보다 크다는 건, 최소한 아이템 1개이상일 경우에만, 관련된 것이 여러개 라는 의미다. 그래서  관련된 아이템을 보여줘라라는 의미임 */}
          {/* 1이라는 의미는 현재 클릭한 메인 해당하는 아이템을 보여줘라 라는 의미임 */}
          {/* 이 애플리케이션은 언제나 1개의 아이템만 보여준다. 그러므로 기준이 1개 이상 , 혹은 1개로 이해할 수 있다.  */}
          {relatedTours.length > 1 && <h4>Related Tours</h4>}
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
            {/* filter부분은 현재 아이템은 보이지 않기 위해 filter를 한 것임 */}
            {relatedTours
              .filter((item) => item._id !== tourId)
              .splice(0, 3)
              .map((item) => (
                <MDBCol>
                  <MDBCard>
                    <Link to={`/tour/${item._id}`}>
                      <MDBCardImage
                        src={item.imageFile}
                        alt={item.title}
                        position="top"
                      />
                    </Link>
                    <span className="text-start tag-card">
                      {item.tags.map((tag) => (
                        <Link to={`/tours/tag${tag}`}> #{tag}</Link>
                      ))}
                    </span>
                    <MDBCardBody>
                      <MDBCardTitle className="text-start">
                        {item.title}
                      </MDBCardTitle>
                      <MDBCardText className="text-start">
                        {excerpt(item.description, 45)}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
          </MDBRow>
        </>
      )}
    </>
  );
}

export default RelatedTour;
