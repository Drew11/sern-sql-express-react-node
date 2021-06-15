import React, {useEffect, useState, useRef, useMemo, useLayoutEffect} from 'react';
import {Link , Route, Switch, useLocation , withRouter} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Table from "../table/table";
import User from "../user/user";
import Spinner from '../spinner/spinner';
import Filter from '../filter/filter';
import {Nav} from '../nav/nav';
import { setCurrentPage, fetchData, usersLoadingComplete, loadingFailure, selectUser } from "../../actions";

import './statistic.scss';

const Statistic = ()=>{

    const { queryFilter, loading, users, paginationOptions, error, selectedUser} = useSelector(state=>state);
    const dispatch = useDispatch();
    const location = useLocation();

    const [modal, setModal] = useState(false);
    const [childPath, setChildPath] = useState(null);
    const [element, setElement] = useState(null);

    const load = ()=>{
        dispatch(fetchData(paginationOptions.usersPerPage, paginationOptions.currentPage));
        dispatch(setCurrentPage());
    };

    const inputRef = useRef();
    const loader = useRef(load);

    const observer = useRef(new IntersectionObserver((entries)=>{
        const first = entries[0];

        if(first.isIntersecting) {
            loader.current();
        }
    }, {threshold: 1}));

    useEffect(()=>{
        console.log(element)
        const currentElement = element;
        const currentObserver = observer.current;

        if(currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if(currentElement) {
                currentObserver.unobserve(currentElement);
            }
        }
    }, [element]);


    useEffect(()=>{
        loader.current = load;
    }, [load]);

    useEffect(()=>{
        if(!users.length) {
            load();
        }
    }, []);

    useEffect(() => {
        dispatch(fetchData(paginationOptions.usersPerPage, paginationOptions.currentPage));
        setChildPath(null);
    }, [paginationOptions.currentPage]);

    // useEffect(()=>{
    //     if(childPath !== location.pathname && childPath !== null) {
    //         dispatch(fetchData(paginationOptions.usersPerPage, paginationOptions.currentPage));
    //         dispatch(selectUser(null));
    //         setChildPath(null);
    //     }
    // }, [childPath, location.pathname]);
    //
    // useEffect(()=>{
    //     if (users) dispatch(loadingFailure(null));
    //     if (error) dispatch(usersLoadingComplete(null))
    // },[users, error]);

    const getChildrenPath = (childPath)=>{
        setChildPath(childPath)
    };

    const getFilteredUsers = () => {
        return users.filter(user=> user['first_name'].toLocaleLowerCase().includes(queryFilter.toLocaleLowerCase()));
    };

    const table = users? <Table
        users={getFilteredUsers()}
    />: null;


    const userList = <Route exact path="/stats/" render={()=>{
        return !error?<div className="content">
            <h2>Users statistics</h2>
            { table }
        </div>: <h1>{error}</h1>
    }}
    />;

    const component =
        <Switch>
            {userList}
            <Route
                path="/stats/:id"
                render={(props)=>(<User
                    {...props}
                    getChildrenPath={getChildrenPath}
                    modal={modal}
                    setModal={setModal}
                />)}
            />
        </Switch>;


    return (
        <div className="statistic" >

            <header>
                <span>AppCo</span>
            </header>

            <Nav
              location={location}
              setModal={setModal}
            />

            <main>
                <Filter/>
                { component }

                {loading? <Spinner/>: null}

                {location.pathname === '/stats' && !loading  && (
                    <div ref={setElement} style={{display:'block', background:'red'}}>Some</div>
                )}

            </main>

            <footer>
            </footer>
        </div>

    );

};

export default withRouter(Statistic);


