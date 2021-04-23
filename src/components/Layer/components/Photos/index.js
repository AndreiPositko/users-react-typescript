import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { WaveLoading } from 'react-loadingg';
import { Container, Row, Col } from 'react-bootstrap';

import Pagination from '~/components/Pagination';
import routes from '~/constants/routes';
import { getPhotosRequest } from '~/store/photos/actions';
import { LIMIT_PHOTO_ITEMS } from '~/constants/pages';

import global from '~/common-style/global.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Photos = () => {
  const [pageNumber, setPageNumber] = useState(null);
  const [pageItems, setPageItems] = useState(null);
  const [field, setField] = useState(null);

  const dispatch = useDispatch();
  const querySearch = useLocation();

  const { photos, loading } = useSelector((state) => ({
    photos: state.photos.photos,
    loading: state.users.loading,
  }));

  const sortData = useCallback(
    (data) => {
      let dataArr = [...pageItems];
      if (field !== data) {
        dataArr = dataArr.sort((a, b) => (a[data] > b[data] ? -1 : 1));
        setField(data);
      } else {
        dataArr = dataArr.reverse();
      }
      setPageItems([...dataArr]);
    },
    [pageItems, field]
  );

  useEffect(() => {
    if (photos.length > 0) return;
    dispatch(getPhotosRequest());
  }, [dispatch, photos.length]);

  useEffect(() => {
    const urlParams = new URLSearchParams(querySearch);
    const queryPage = urlParams.get('page') ? urlParams.get('page') : 1;
    setPageNumber(queryPage);
  }, [querySearch]);

  useEffect(() => {
    const items = [...photos].slice(
      (pageNumber - 1) * LIMIT_PHOTO_ITEMS,
      pageNumber * LIMIT_PHOTO_ITEMS
    );
    setPageItems(items);
  }, [pageNumber, photos]);

  return (
    <div>
      <Container className={global.component_container}>
        <Row>
          {loading && <WaveLoading color="yellow" size="large" />}
          <Col>
            <h2 className={global.main_title}>Photos</h2>
            <div className={global.subtitle}>
              <span
                className={global.subtitle_id}
                onClick={() => sortData('id')}
              >
                id
              </span>
              <div className={global.subtitle_block}>
                <span onClick={() => sortData('thumbnailUrl')}>image</span>
                <span onClick={() => sortData('title')}>title</span>
              </div>
            </div>
            <ul className={global.users_list}>
              {pageItems &&
                pageItems.length &&
                pageItems.map((photo, index) => (
                  <Link
                    to={`${routes.photos}/${photo.id}`}
                    className={global.list_link}
                    key={index}
                  >
                    <li key={index} className={global.list_item}>
                      <span>{photo.id}.</span>
                      <span>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                      </span>
                      <span>{photo.title}</span>
                    </li>
                  </Link>
                ))}
            </ul>
            <Pagination count={photos.length} pageNumber={pageNumber} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Photos;
