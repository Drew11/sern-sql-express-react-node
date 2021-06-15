import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { setCurrentPage, setButtonsPerPage, setIndexFirstPage } from "../../actions";
import './pagination.css'

const Pagination = ( props ) => {

    const dispatch = useDispatch();
    const {
        usersPerPage,
        currentPage,
        buttonsPerPage,
        indexFirstPage,
        paginationLength
    } = useSelector(state=>state.paginationOptions);

    const setPage = (i)=>{
        dispatch(setCurrentPage(i))
    };

    const pages = Math.ceil(paginationLength / usersPerPage);
    const arr = [];

    for (let i = 1; i <= pages; i++) {
        arr.push(i)
    }

    const liPerPage = arr.slice(indexFirstPage, buttonsPerPage);


    const listenPage = (range, firstButtonListener)=>{
        let range1 = range;
        console.log(usersPerPage * currentPage, )
        // if(usersPerPage * currentPage > paginationLength) {
        //     range1 = paginationLength - usersPerPage * currentPage;
        //
        // }
        dispatch(setIndexFirstPage( range ));
        dispatch(setButtonsPerPage(  range ));
        dispatch(setCurrentPage(buttonsPerPage + firstButtonListener))
    } ;

    return(
        <div className="pagination">
            <ul>
                {
                    indexFirstPage <= 0?
                        null:
                        <div className="arrow left"
                             onClick={()=>listenPage(-5, -5)}
                        >
                        </div>
                }

                {liPerPage.map(item=><li
                    className={item===currentPage?'active': ''}
                    onClick={()=>{
                        setPage(item)}}
                >{item}
                </li>)}

                {
                    buttonsPerPage >= arr.length?
                        null:
                        <div className="arrow right"
                             onClick={()=>listenPage(5, 1)}
                        >
                        </div>
                }
            </ul>
        </div>
    )
};

export default Pagination;


