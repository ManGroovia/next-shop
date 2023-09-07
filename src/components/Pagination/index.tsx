import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
const Pagination  = ({onChangePage}:any)=>{
    return(
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event)=> onChangePage(event.selected + 1)
        
        }
        pageRangeDisplayed={5}
        pageCount={6}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    )
}

export default Pagination