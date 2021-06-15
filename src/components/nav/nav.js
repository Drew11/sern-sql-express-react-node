import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";


function StatsNav () {
  return (
    <nav>
      <Link to="/">Main page</Link> <div></div> <span>Users Statistics</span>
    </nav>
  )
}

function UserNav( props ) {

  const {setModal, firstName, lastName} = props;

  return(
    <nav>
      <Link to="/">Main page</Link> <div></div>  <Link to="/stats">User Statistics</Link>
      <div></div>
      {`${firstName} ${lastName}`}
      <button
        onClick={()=>setModal(true)}
      >
        Update email
      </button>
    </nav>
  )
}

export const Nav = (props) => {
  const { selectedUser } = useSelector(state=>state);
  let userPath;
  let userNav;

  if(selectedUser) {
    userPath = `/stats/${selectedUser.id}`;
    userNav = <UserNav
      firstName={selectedUser.first_name}
      lastName={selectedUser.last_name}
      setModal={props.setModal} />
  }


  return {
    ['/stats']: <StatsNav />,
    [userPath]: userNav
  }[props.location.pathname] || null
};