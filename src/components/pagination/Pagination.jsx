/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
