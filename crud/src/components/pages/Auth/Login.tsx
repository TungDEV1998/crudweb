import React, { useState } from 'react'
import { imgSource } from '../../images/images';
import Styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';


interface IProps {
    setIsLogin: (value: boolean) => void;
}

const Login: React.FC<IProps> = (props) => {

    const [userName, setUserName] = useState<string>();
    const [userPassword, setUserPassword] = useState<string>();
    const { setIsLogin } = props;
    // let navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleLogin", userName, userPassword);
        if (userName === 'admin' && userPassword === 'admin') {
            console.log('success');
            // navigate('/');
            setIsLogin(true);
        } else {
            alert('sai roi cu')
        }
    };

    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };
    const handleChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    };



    return (
        <>
            <form onSubmit={handleLogin} method="post">
                <div className={Styles.imgcontainer}>
                    <img src={imgSource.logo} alt="Avatar" className={Styles.avatar} />
                </div>
                <div className={Styles.container}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text"
                        defaultValue={userName}
                        onChange={handleChangeUserName} />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password"
                        defaultValue={userPassword}
                        onChange={handleChangeUserPassword} />
                    <button type="submit" className={Styles.button}>Login</button>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <div className={Styles.container} style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className={Styles.cancelbtn}>Cancel</button>
                    <span className={Styles.psw}>Forgot <a href="#">password?</a></span>
                </div>
            </form>

        </>
    )
}

export default Login