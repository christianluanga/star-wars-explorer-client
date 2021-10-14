import React from 'react';
import { Pagination } from 'react-bootstrap';

export default (props: any) => {
    const {active, total, handlePagination} = props
  let items = [];
  for (let number = 1; number <= total; number++) {
    items.push(
      <Pagination.Item  key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination  size="lg" onClick={handlePagination}>
        {items}
      </Pagination>
    </div>
  );
};
