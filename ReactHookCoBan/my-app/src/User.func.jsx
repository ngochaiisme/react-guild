import React from 'react'
import { useState, useEffect } from 'react'
export default function UserFuntionalComponent() {
    const [age, setAge] = useState(21)
    const [address, setAddress] = useState({
        nation: 'Viet Nam',
        city: 'HCM',
    })

    const handleClick = () => {
        setAge((age) => age + 1)
    }
    const ChangeAdress = () => {
        setAddress((prev) => ({
            ...prev,
            city: 'qn',
        }))
    }

    useEffect(() => {
        console.log('useEffect with array [] = didmount')

        return () => {
            console.log('return from [] = will unmount everything')
        }
    }, [])
    useEffect(() => {
        console.log('useEffect with no dependencies = didupdate')
    })

    useEffect(() => {
        console.log('useEffect with array [] = age')
    }, [age])

    useEffect(() => {
        console.log('useEffect with array [] = age')
        return () => {
            console.log('return = will unmount Age')
        }
    }, [age])

    return (
        <div className="flex flex-col items-center justify-start">
            <div className="text-center">
                <h1 className="text-2xl font-bold">User Function Component</h1>
                <a className="text-blue-600 hover:underline block">Name: Duong Ngoc Hai</a>
                <a className="text-blue-600 hover:underline block">Age: {age} </a>
                <a className="text-blue-600 hover:underline block">Nation: {address.nation} </a>
                <a className="text-blue-600 hover:underline block">City: {address.city} </a>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
            >
                Click to increase Age
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={ChangeAdress}
            >
                ChangeAdress
            </button>
        </div>
    )
}
