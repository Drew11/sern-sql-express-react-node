import React from 'react';
import {
    useRouteMatch,
    useHistory,
    useLocation
} from "react-router-dom";
import {
   useDispatch,
   useSelector
} from "react-redux";

import {selectUser} from '../../actions/index';

import './table.scss'

const Table = ( props )=> {

    const { users, setModal, modal } = props;
    let { url } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    if(users.length === 0) {
        return null
    }

    const columnsHeader =  Object.keys(users[0]).map((text)=>{
        text = text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
        text = text.replace(text[0], text[0].toLocaleUpperCase());
        const index =  text.indexOf(' ');
        if(index) {
            text = text.replace(text[index+1], text[index+1].toLocaleUpperCase());
        }
        return<th>{text}</th>
    });

    const handleRowClick = (user) => {
        dispatch(selectUser(user));
        history.push(`${url}/${user.id}`);
    };

    return(
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        {columnsHeader}
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index)=>
                            <tr
                                key={index}
                                onClick={()=>handleRowClick(user)}
                            >
                                {Object.values(user).map((value, index)=><td
                                    key={index}
                                >{value}
                                </td>)}
                           </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
};

export default Table;
