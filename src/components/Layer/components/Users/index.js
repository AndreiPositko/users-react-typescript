import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import { WaveLoading } from 'react-loadingg';
import { Container, Row, Col } from 'react-bootstrap';

import routes from '../../../../constants/routes';
import { getUsersRequest } from '../../../../store/users/actions';

import global from '../../../../common-style/global.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [field, setField] = useState(null);
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => ({
    users: state.users.data,
    loading: state.users.loading,
  }));

  const sortData = useCallback(
    (data) => {
      let dataArr = [...usersList];
      if (field !== data) {
        dataArr = dataArr.sort((a, b) => (a[data] > b[data] ? -1 : 1));
        setField(data);
      } else {
        dataArr = dataArr.reverse();
      }
      setUsersList([...dataArr]);
    },
    [usersList, field]
  );

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  return (
    <div>
      <Container className={global.component_container}>
        <Row>
          {loading && (
            <WaveLoading color="yellow" size="large" position="top" />
          )}
          <Col>
            <h2 className={global.main_title}>Users</h2>
            <div className={global.subtitle}>
              <span onClick={() => sortData('id')}>id</span>
              <span onClick={() => sortData('name')}>name</span>
              <span onClick={() => sortData('email')}>email</span>
              <span onClick={() => sortData('website')}>web site</span>
            </div>
            <ul>
              {usersList.map((user, index) => {
                return (
                  <Link
                    to={generatePath(routes.user, { userId: user.id })}
                    className={global.list_link}
                    key={index}
                  >
                    <li key={index} className={global.list_item}>
                      <span>{user.id}. </span>
                      <span>{user.name}</span>
                      <span>{user.email}</span>
                      <span>{user.website}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;
