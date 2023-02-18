import React from 'react';
import { BrowserRouter, Link, Routes, Route, NavLink } from 'react-router-dom';
import Detail from './User/Detail/Detail';
import Form from './User/Form/Form';
import List from './User/List/List';
import styles from './styles.module.css'
import BaseLayout from './BaseLayout';
import Users from './BaseLayout/pages/SideBar/Users';
import Roles from './BaseLayout/pages/SideBar/Roles';
import Navigation from '../../../../../crudweb/crud/src/components/common/Navigation/Navigation';
import Home from './User/Home/Home';
import Footer from '../common/Footer/Footer';
import About from './BaseLayout/pages/About/About';

interface IProps {
    setIsLogin: (value: boolean) => void;
}

function BaseWebRouter(props: IProps) {
    const { setIsLogin } = props;
    return (
        <BrowserRouter>
            {/* Navigation */}
            <Navigation setIsLogin={setIsLogin} />

            <Routes>
                {/* ROUTES Setting */}
                
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<List />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/form' element={<Form />} />
                <Route path='/form/:id' element={<Form />} />
                <Route path='/about' element={<About />} />

                {/* BASE LAYOUT */}
                <Route path='/base-layout' element={<BaseLayout />}>
                    {/* INDEX ROUTE */}
                    <Route
                        index
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>Administrator Area</p>
                            </main>
                        }
                    />
                    <Route path='/base-layout/users' element={<Users />} />
                    <Route path='/base-layout/roles' element={<Roles />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default BaseWebRouter;