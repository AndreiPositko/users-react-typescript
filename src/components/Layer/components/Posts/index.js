import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { WaveLoading } from 'react-loadingg';
import { Container, Row, Col } from 'react-bootstrap';

import routes from '../../../../constants/routes';
import { getPostsRequest } from '../../../../store/posts/actions';
import Pagination from './../../../Pagination';
import { LIMIT_ITEMS } from '../../../../constants/pages';

import global from '../../../../common-style/global.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = () => {
  const [pageNumber, setPageNumber] = useState(null);
  const [pageItems, setPageItems] = useState(null);
  const [field, setField] = useState(null);

  const dispatch = useDispatch();
  const querySearch = useLocation().search;

  const { posts, loading } = useSelector((state) => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
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
    if (posts.length > 0) return;
    dispatch(getPostsRequest());
  }, [dispatch, posts.length]);

  useEffect(() => {
    const urlParams = new URLSearchParams(querySearch);
    const queryPage = urlParams.get('page') ? urlParams.get('page') : 1;
    setPageNumber(queryPage);
  }, [querySearch]);

  useEffect(() => {
    const items = [...posts].slice(
      (pageNumber - 1) * LIMIT_ITEMS,
      pageNumber * LIMIT_ITEMS
    );
    setPageItems(items);
  }, [pageNumber, posts]);

  return (
    <div>
      <Container className={global.component_container}>
        <Row>
          {loading && <WaveLoading color="yellow" size="large" />}
          <Col>
            <h2 className={global.main_title}>Posts</h2>
            <div className={global.subtitle}>
              <span
                className={global.subtitle_id}
                onClick={() => sortData('id')}
              >
                id
              </span>
              <div class={global.subtitle_block}>
                <span onClick={() => sortData('title')}>title</span>
              </div>
            </div>
            <ul className={global.users_list}>
              {pageItems &&
                pageItems.length &&
                pageItems.map((post, index) => (
                  <Link
                    to={`${routes.posts}/${post.id}`}
                    className={global.list_link}
                    key={index}
                  >
                    <li key={index} className={global.list_item}>
                      <span>{post.id}</span>
                      <span>{post.title}</span>
                    </li>
                  </Link>
                ))}
            </ul>
            <Pagination count={posts.length} pageNumber={pageNumber} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
