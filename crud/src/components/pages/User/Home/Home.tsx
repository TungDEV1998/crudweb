import React from 'react'
import { imgSource } from '../../../images/images'
import Styles from './Home.module.css'


export default function Home() {
    return (
        <>
            <div>
                <div className={Styles.header}>
                    <div className="container">
                        <div className="row">
                            <div className={`${Styles.logo} col-lg-3 col-md-3 col-sm-12`}>
                                <h1><a href="#"><img className="img-fluid" src={imgSource.logo} /></a></h1>
                            </div>
                            <div className={`${Styles.search} col-lg-7 col-md-7 col-sm-12`}>
                                <form className="form-inline my-lg-0">
                                    <input className={Styles.form_control} type="search" placeholder="Tìm kiếm" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                                </form>
                            </div>
                            <div id="cart" className={`${Styles.cart} col-lg-2 col-md-2 col-sm-12`}>
                                <a href="#">giỏ hàng</a> <span>8</span>
                            </div>
                        </div>
                        <button className="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>
                <section>
                    <div className={Styles.body}>
                        <div className="container">
                            {/* Menu */}
                            <div className="row">
                                <div id={Styles.menu} className="collapse col-lg-12  col-md-12 col-sm-12">
                                    <ul>
                                        <li className={Styles.menu__item}><a href="#">iPhone</a></li>
                                        <li className={Styles.menu__item}><a href="#">Samsung</a></li>
                                        <li className={Styles.menu__item}><a href="#">HTC</a></li>
                                        <li className={Styles.menu__item}><a href="#">Nokia</a></li>
                                        <li className={Styles.menu__item}><a href="#">Sony</a></li>
                                        <li className={Styles.menu__item}><a href="#">Blackberry</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Menu */}
                            {/* Main */}
                            <div className="row">
                                {/* Main Content */}
                                <div id={Styles.main} className="col-lg-8 col-md-12 col-sm-12">
                                    {/* Slider */}
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={5} />
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={imgSource.slide1} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={imgSource.slide2} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={imgSource.slide3} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={imgSource.slide4} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={imgSource.slide5} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={imgSource.slide6} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </button>
                                    </div>
                                    {/* End Slider */}
                                    {/* Featured Product */}
                                    <div className="products">
                                        <h3>Sản phẩm nổi bật</h3>
                                        <div className={`${Styles.product_list} row row-cols-1 row-cols-lg-3 row-cols-md-3`}>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product1} /></a>
                                                    <h4><a href="#">Oppo F7</a></h4>
                                                    <p>giá bán: <span>1.490.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product2} /></a>
                                                    <h4><a href="#">Oppo F9</a></h4>
                                                    <p>giá bán: <span>2.990.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product3} /></a>
                                                    <h4><a href="#">Oppo A12e</a></h4>
                                                    <p>giá bán: <span>3.990.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product4} /></a>
                                                    <h4><a href="#">Nokia 6.1 Plus</a></h4>
                                                    <p>giá bán: <span>4.790.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product5} /></a>
                                                    <h4><a href="#">Nokia 5</a></h4>
                                                    <p>giá bán: <span>1.290.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product6} /></a>
                                                    <h4><a href="#">iPhone Xs Max 2 Sim</a></h4>
                                                    <p>giá bán: <span>32.990.000đ</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Featured Product */}
                                    {/* Latest Product */}
                                    <div className={Styles.product}>
                                        <h3>Sản phẩm mới</h3>
                                        <div className={`${Styles.product_list} row row-cols-1 row-cols-lg-3 row-cols-md-3`}>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product7} /></a>
                                                    <h4><a href="#">iPhone Xs Max 2 Sim</a></h4>
                                                    <p>giá bán: <span>32.990.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product8} /></a>
                                                    <h4><a href="#">iPhone Xs Max 2 Sim (Hàng trôi bảo hành)</a></h4>
                                                    <p>giá bán: <span>32.990.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product9} /></a>
                                                    <h4><a href="#">iPhone Xs Max 2 Sim</a></h4>
                                                    <p>giá bán: <span>32.990.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product10} /></a>
                                                    <h4><a href="#">iPhone Xs Max 2 Sim</a></h4>
                                                    <p>giá bán: <span>32.990.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product11} /></a>
                                                    <h4><a href="#">iPhone Xs Max 2 Sim</a></h4>
                                                    <p>giá bán: <span>32.990.000đ</span></p>
                                                </div>
                                            </div>
                                            <div className={Styles.product_item}>
                                                <div className={`${Styles.product_item_inner} card`}>
                                                    <a href="#"><img src={imgSource.product12} /></a>
                                                    <h4><a href="#">iPhone Xs Max 2 Sim</a></h4>
                                                    <p>giá bán: <span>32.990.000đ</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Latest Product */}
                                </div>
                                {/* End Main Content */}
                                {/* Right Sidebar */}
                                <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
                                    <div id="banner">
                                        <div className={Styles.banner_item}>
                                            <a href="#"><img className="img-fluid" src={imgSource.banner1} /></a>
                                        </div>
                                        <div className={Styles.banner_item}>
                                            <a href="#"><img className="img-fluid" src={imgSource.banner2} /></a>
                                        </div>
                                        <div className={Styles.banner_item}>
                                            <a href="#"><img className="img-fluid" src={imgSource.banner3} /></a>
                                        </div>
                                        <div className={Styles.banner_item}>
                                            <a href="#"><img className="img-fluid" src={imgSource.banner4} /></a>
                                        </div>
                                        <div className={Styles.banner_item}>
                                            <a href="#"><img className="img-fluid" src={imgSource.banner5} /></a>
                                        </div>
                                        <div className={Styles.banner_item}>
                                            <a href="#"><img className="img-fluid" src={imgSource.banner6} /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* End Right Sidebar */}
                            </div>
                            {/* End Main */}
                        </div>
                    </div>
                    {/* End Body */}
                </section>
            </div>

        </>
    )
}
