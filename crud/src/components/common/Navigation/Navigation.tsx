import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

interface IProps {
    setIsLogin: (value: boolean) => void;
}
export default function Navigation(props: IProps) {
    const {setIsLogin} = props;
    let navigate = useNavigate();
    return (
        <>
            <ul className={styles.navigation}>
                <li className={styles.link}>
                    <Link to='/list'>List </Link>
                </li>
                <li className={styles.link}>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className={styles.link}>
                    <Link to='/form'>Form</Link>
                </li>
                <li className={styles.link}>
                    <Link to='/'>Home</Link>
                </li>

                {/* <li className={styles.link}>
                    <Link to='/search?name=Tony&age=27'>Search</Link>
                </li> */}
                <li className={styles.link}>
                    <Link to='/base-layout'>Admin</Link>
                </li>
                <li className={styles.link}>
                    <button className={styles.button} onClick={() => {setIsLogin(false)
                    navigate('/')}}>Log Out</button>
                </li>
            </ul>
        </>
    )
}
