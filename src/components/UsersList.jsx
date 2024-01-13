import React, { useEffect, useState } from 'react'
import {getUsers} from '../database/Users'
import Loading from './Loading'

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setUsers(getUsers());
        }, 2000);
        return () => {
            setUsers([]);
        }
    }, [refresh]);
    if (users.length === 0) {
        return <Loading />
    }
  return (
    <div className='w-75 mt-5 py-5 text-center mx-auto border rounded shadow'>
        {
            users.map((user) => {
                return <h6 className='m-3'>{user.username}</h6>
            })
        }
        <button type="button" className='btn btn-outline-danger' onClick={() => {setRefresh(!refresh)}}>بارگذاری مجدد</button>
    </div>
  )
}

export default UsersList