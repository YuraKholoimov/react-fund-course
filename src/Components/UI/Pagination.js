import React from 'react'
import style from '../../css/pagination.module.css'
import { getPagesArray } from './../utils/page'

const Pagination = ({totalPage, page, setPage}) => {

    const pages = getPagesArray(totalPage)

    return(
        <div>
            <div className={style.pagination}>{
                pages.map(p => 
                    <span key={p}  
                    className={p === page ? `${style.paginationCurrent} ${style.page}` : style.page} 
                    onClick={()=> setPage(p)}>
                    {p}
                    </span>
                )
          }</div> 
        </div>
    )
}
export default Pagination;