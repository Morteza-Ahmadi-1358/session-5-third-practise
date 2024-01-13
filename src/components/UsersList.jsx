import React, { useEffect, useState } from 'react'
import {getUsers} from '../database/Users'
import Loading from './Loading'

const UsersList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setUsers(getUsers());
        }, 3000);
    }, []);
    if (users.length === 0) {
        return <Loading />
    }
  return (
    <div>
        {
            users.map((user) => {
                return <h6>{user.username}</h6>
            })
        }
    </div>
  )
}

export default UsersList