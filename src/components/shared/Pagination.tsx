import React from 'react';
import { Pagination as _Pagination} from 'react-bootstrap';

const Pagination =  (props: any) => {
    const {active, total, handlePagination} = props
  let items = [];
  for (let number = 1; number <= total; number++) {
    items.push(
      <_Pagination.Item  key={number} active={number === active}>
        {number}
      </_Pagination.Item>
    );
  }
  return (
    <div>
      <_Pagination className="d-flex justify-content-center flex-wrap" size="lg" onClick={handlePagination}>
        {items}
      </_Pagination>
    </div>
  );
};
export default Pagination