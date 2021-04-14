import React from 'react';

import { useHistory } from 'react-router-dom';

import { LIMIT_ITEMS } from '../../constants/pages';

const Pagination = ({ count }) => {
  const pages = count / LIMIT_ITEMS;
  const history = useHistory();

  const setQuery = (number) => {
    history.push({ search: `page=${number}` });
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
    return items;
  };
  return <div>{buttons()}</div>;
};

export default Pagination;
