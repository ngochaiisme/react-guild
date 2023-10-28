import React, { useEffect, useState } from 'react'
import { getUser } from './api'
import useUser from './useUser'

export default function User() {
    // const [user, setUser] = useState({})
    // useEffect(() => {
    //     getUser().then((res) => {
    //         setUser(res.data)
    //     })
    // }, [])
    const [user] = useUser({ name: 'abc', address: 'qn', age: '21' })

    return <div>User:{user.name + '\n' + user.address + '\n' + user.age}</div>
}
