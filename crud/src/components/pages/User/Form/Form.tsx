import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

const Form: React.FC = () => {
    const [userName, setUserName] = useState<string>()
    const [userAge, setUserAge] = useState<string>()
    let params = useParams();

    useEffect(() => {
        if (params.id) {
            getListUser(params.id)
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleSubmit", userName, userAge);
        if (params.id) {
            updateUser(userName, userAge);
        } else { createUser(userName, userAge); }


    };

    const getListUser = (userId: string | undefined) => {
        console.log(params.id);
        const url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users/" + userId
        fetch(url, {
            method: 'GET',

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setUserName(data.name);
                setUserAge(data.age);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const createUser = (name: string | undefined, age: string | undefined) => {
        const data = {
            name: name,
            age: age,
        };
        const url = 'https://63758f5b48dfab73a4fb0332.mockapi.io/users'
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const updateUser = (name: string | undefined, age: string | undefined) => {
        const data = {
            name: name,
            age: age,
        };
        const url = 'https://63758f5b48dfab73a4fb0332.mockapi.io/users/' + params.id
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };



    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserName(e.target.value);
    };
    const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserAge(e.target.value);
    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    defaultValue={userName}
                    onChange={handleChangeUserName} />
                <input type="number"
                    defaultValue={userAge}
                    onChange={handleChangeUserAge} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form