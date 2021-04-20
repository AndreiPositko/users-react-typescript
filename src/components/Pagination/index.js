import React from 'react';

import { useHistory } from 'react-router-dom';

import { LIMIT_ITEMS } from '../../constants/pages';

import global from '../../common-style/global.module.scss';

const Pagination = ({ count, pageNumber }) => {
  const pages = count / LIMIT_ITEMS;
  const history = useHistory();

  const setQuery = (number) => {
    history.push({ search: `page=${number}` });
  };

  const backRight = () => {
    if (pageNumber < pages) setQuery(++pageNumber);
  };

  const backLeft = () => {
    if (pageNumber > 1) setQuery(--pageNumber);
  };

  const buttons = () => {
    const items = [];
    for (let i = 0; i < pages; i++) {
      items.push(
        <span key={i} onClick={() => setQuery(++i)}>
          {i + 1}
        </span>
      );
    }
    if (pageNumber < pages)
      items.push(
        <span key="backRight" onClick={() => backRight()}>{`>`}</span>
      );
    if (pageNumber > 1)
      items.unshift(
        <span key="backLeft" onClick={() => backLeft()}>{`<`}</span>
      );
    return items;
  };

  return <div className={global.pagination_wrapper}>{buttons()}</div>;
};

export default Pagination;
