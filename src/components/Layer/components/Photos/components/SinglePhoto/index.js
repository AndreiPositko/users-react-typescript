import react, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { getPhotoRequest } from '../../../../../../store/photos/actions';

import global from '../../../../../../common-style/global.module.scss';

const SinglePhoto = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { id } = useParams();

  const { photo } = useSelector((state) => ({
    photo: state.photos.singlePhoto,
  }));

  useEffect(() => {
    dispatch(getPhotoRequest(id));
  }, [dispatch]);

  const editSinglePhoto = (id) => {
    dispatch(getPhotoRequest(id));
    history.push(`${url}/edit`);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className={global.list_header}>
              <h2 className={global.main_title}>Photo № {photo.id}</h2>
              <Button
                variant="warning"
                onClick={() => editSinglePhoto(photo.id)}
              >
                Edit Photo
              </Button>
            </div>
            <ul className={global.data_list}>
              <li className={global.list_item}>
                <span className={global.item}>photo title:</span> {photo.title}
              </li>
              <li className={global.list_item}>
                <span className={global.item}>photo url:</span> {photo.url}
              </li>
              <li className={global.list_item}>
                <span className={global.item}>photo img:</span>
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SinglePhoto;
