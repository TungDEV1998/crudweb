import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';


type Props = {}

interface IUser {
    id: number;
    name: string;
    age: number;
    img?: string,
}

function List({ }: Props) {
    const [listUser, setListUser] = useState<Array<IUser>>([]);

    let navigate = useNavigate();

    useEffect(() => {
        getListUser();
    }, []);
    const getListUser = () => {
        const url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users";
        fetch(url, {
            method: 'GET',

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setListUser(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleDelete = (userID: string | number) => {
        const url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users/" + userID;
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                getListUser();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    // const handleDetail = (userID: string | number) => {
    //     <link rel="stylesheet" href="" />
    // }



    return (
        <>
            <h1>List User</h1>
            <table className='table table-striped'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {listUser.map((item) => (
                        <tr key={`${item.id}`}>
                            <th scope='row'>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={() => {
                                    navigate('/form/' + item.id);
                                }}>Update</button>
                                <button onClick={() => {
                                    navigate('/detail/' + item.id);
                                }}>DETAIL</button>
                                <button onClick={() => handleDelete(item.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </>

    )
}
export default List