import React, {useEffect, useState} from 'react';
import renderLineChart from '../charts/charts';
import ModalView from '../modal/modal';
import Spinner from '../spinner/spinner';
import './user.scss';
import Modal from 'react-modal';
import { tempApi } from '../../api/index';
import {useParams, useLocation } from "react-router-dom";

const User = (props)=> {
    const {modal, setModal, getChildrenPath} = props;

    const params = useParams();
    const location = useLocation();
    const [statistic, setStatistic] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(()=>{
            getChildrenPath(location.pathname);
            Modal.setAppElement('.user-charts');
            const fetchData = async () => {
               const data = await tempApi.getStatistic(params.id);
               setStatistic(data);
            };
           fetchData();
        },
    []);

    // useEffect(async()=> {
    //    if(email!=='' &&  email !== null){
    //         console.log(email)
    //        await service.changeEmail(params.id, email)
    //    }
    // }, [email]);
    return(
            <div className="user-charts">
                {
                    modal? <ModalView
                        {...props}
                        modal={modal}
                        setModal={setModal}
                        setEmail={setEmail}
                    />:null
                }
                <h1>User Charts</h1>
                {statistic?renderLineChart(statistic): <Spinner/>}
            </div>
    )
};

export default User;