import React, { useState, ChangeEvent, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem'
import { v4 } from 'uuid'
import { IProducts } from '../../redux/reducers/productsReducer'
import { Row } from '../../styles/global'
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: 'active', // default to "disabled"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;
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

const ShopBar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px #dadada;
  padding-bottom: 14px;
  span {
    color: #0e8ce4;
  }
`

const ShopProductCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 40px;
  span {
    color: #0e8ce4;
  }
`

const ShopContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`



type Props = {
  products: IProducts[]
}

const ProductList: React.FC<Props> = ({products}) => {

  const itemsPerPage = 20
  const [currentProducts, setCurrentProducts] = useState<IProducts[]>([])

  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentProducts(products.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(products.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, products])

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
    <Wrapper>
      <ShopBar>
        <ShopProductCount>
          <span>{products.length}</span>
           &nbsp;товаров найдено
        </ShopProductCount>
      </ShopBar>
      <ShopContent>
        {
          currentProducts.map(item => (
            <ProductItem key={item.articul} item={item} />
          ))
        }
      </ShopContent>
      <MyPaginate
        previousLabel={<FaChevronLeft fontSize={14} />}
        nextLabel={<FaChevronRight fontSize={14} />}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </Wrapper>
  );
}

export default ProductList