import React from 'react';
import {Link} from 'react-router-dom';
import {createBrowserHistory as history} from 'history';
function UserList(props){
    const firstFiveUsers = props.users.slice(0,5);

    const handleAddNew = () =>{
        
    }

    return(
        <div>
        {firstFiveUsers.map(user =>
            (<li><Link to={`/userlist/${user.id}`} key={user.id}>{user.title}</Link></li>)
          )}
          <Link to = {'/GetUserInfo'} className="btn btn-primary">Add New User</Link>
        </div>
    );
}

export default UserList;