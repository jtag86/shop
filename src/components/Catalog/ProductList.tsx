import React, { useState, ChangeEvent, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem'
import { v4 } from 'uuid'
import { IProducts } from '../../redux/reducers/productsReducer'
import { Row } from '../../styles/global'
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: 'active', // default to "disabled"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0 5rem;
  height: 48px;
  box-sizing: border-box;
  li {
    width: 48px;
    height: 100%;
    border: solid 1px #e5e5e5;
    display: table;
    text-align: center;

    cursor: pointer;
    :nth-child(1) {
      border-radius: 5px;
    }
    :nth-child(2) {
      border-radius: 5px 0 0 5px;
    }
    :nth-last-child(2) {
      border-radius: 0 5px 5px 0;
    }
    :nth-last-child(1) {
      border-radius: 5px;
    }
    :nth-child(n+2):nth-last-child(n+3) {
      border-right: 1px;
    }
  }
  li.previous {
    margin-right: 15px;
  }
  li.next {
    margin-left: 15px;
  }
  li a {
    font-weight: 500;
    color: rgba(0,0,0,0.7);
    font-size: 15px;
    width: 100%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;

  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    color: #007bff;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;


type Props = {
  products: IProducts[]
}

const ProductList: React.FC<Props> = ({products}) => {

  const itemsPerPage = 10
  const [currentItems, setCurrentItems] = useState<IProducts[]>([])

  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(products.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(products.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  type EventProps = {
    selected: number
  }

  const handlePageClick = (event: EventProps) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

 

  return (
    <>
      <MyPaginate
        previousLabel={<FaChevronLeft fontSize={14} />}
        nextLabel={<FaChevronRight fontSize={14} />}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}

export default ProductList