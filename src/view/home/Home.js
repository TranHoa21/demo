import React, { useState } from "react";
import "../../style/home/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isShowEuropeFood, setIsShowEuropeFood] = useState(true);
    const [isShowVietNamFood, setIsShowVietNamFood] = useState(false);
    const [isShowKoreaFood, setIsShowKoreaFood] = useState(false);
    const [isShowJapanFood, setIsShowJapanFood] = useState(false);
    const [isShowChinaFood, setIsShowChinaFood] = useState(false);


    const handleEuropeFood = () => {
        setIsShowEuropeFood(true);
        setIsShowVietNamFood(false);
        setIsShowKoreaFood(false);
        setIsShowJapanFood(false);
        setIsShowChinaFood(false)
    };
    const handleVietNamFood = () => {
        setIsShowVietNamFood(true);
        setIsShowEuropeFood(false);
        setIsShowKoreaFood(false);
        setIsShowJapanFood(false);
        setIsShowChinaFood(false)
    };
    const handlKoreaFood = () => {
        setIsShowVietNamFood(false);
        setIsShowEuropeFood(false);
        setIsShowKoreaFood(true);
        setIsShowJapanFood(false);
        setIsShowChinaFood(false)
    };
    const handlJapanFood = () => {
        setIsShowVietNamFood(false);
        setIsShowEuropeFood(false);
        setIsShowKoreaFood(false);
        setIsShowJapanFood(true);
        setIsShowChinaFood(false)
    };
    const handlChinaFood = () => {
        setIsShowVietNamFood(false);
        setIsShowEuropeFood(false);
        setIsShowKoreaFood(false);
        setIsShowJapanFood(false);
        setIsShowChinaFood(true)
    };
    return (
        <div div className="all-home">
            <div className="silde-projects">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay={{ delay: 7000 }}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="slider"
                >
                    <SwiperSlide className="slider-item">
                        <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716617809/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_vflrrk.jpg" />
                        <h1 className="premium-steak">Standard Asian and European cuisine restaurant</h1>
                        <div className="box-address">
                            <div className="address-open-close">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629265/clock_2098218_x6qcu0.png" />
                                <h3 className="open-close">9:00-20:00</h3>
                            </div>
                            <div className="address-open-close-2">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629270/placeholder_727606_zedxmf.png" />
                                <h3 className="open-close2">Viet Nam</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item">
                        <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716617974/grilled-ribs-wooden-board-tomato-pepper-potato-top-view_bn0tgh.jpg" />
                        <h1 className="premium-steak">Enjoy premium grilled ribs with Global Palate</h1>
                        <div className="box-address">
                            <div className="address-open-close">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629265/clock_2098218_x6qcu0.png" />
                                <h3 className="open-close">9:00-20:00</h3>
                            </div>
                            <div className="address-open-close-2">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629270/placeholder_727606_zedxmf.png" />
                                <h3 className="open-close2">Viet Nam</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item">
                        <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716617991/top-view-table-full-delicious-food-composition_2_mlvxkx.jpg" />
                        <h1 className="premium-steak">Enjoy Asian cuisine with Global Palate</h1>
                        <div className="box-address">
                            <div className="address-open-close">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629265/clock_2098218_x6qcu0.png" />
                                <h3 className="open-close">9:00-20:00</h3>
                            </div>
                            <div className="address-open-close-2">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629270/placeholder_727606_zedxmf.png" />
                                <h3 className="open-close2">Viet Nam</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item">
                        <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716618176/side-view-sushi-rolls-with-eel-with-soy-sauce-ginger_bmdv9c.jpg" />
                        <h1 className="premium-steak">Taste Japan cuisine together with Global Palate</h1>
                        <div className="box-address">
                            <div className="address-open-close">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629265/clock_2098218_x6qcu0.png" />
                                <h3 className="open-close">9:00-20:00</h3>
                            </div>
                            <div className="address-open-close-2">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629270/placeholder_727606_zedxmf.png" />
                                <h3 className="open-close2">Viet Nam</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slider-item">
                        <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716618440/grilled-pork-served-with-sauce-korean-style_s0m0xu.jpg" />
                        <h1 className="premium-steak">Taste Korea cuisine together with Global Palate</h1>
                        <div className="box-address">
                            <div className="address-open-close">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629265/clock_2098218_x6qcu0.png" />
                                <h3 className="open-close">9:00-20:00</h3>
                            </div>
                            <div className="address-open-close-2">
                                <img className="address-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716629270/placeholder_727606_zedxmf.png" />
                                <h3 className="open-close2">Viet Nam</h3>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className="row home-about">
                <div className="col-sm-4 home-about-box">
                    <img className="image-home-about" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716626227/f70355eaf38a09c4e9878c64a78c4184_n4oz9q.jpg" />
                </div>
                <div className="col-sm-5 home-about-box2">
                    <h3 className="home-about-title">
                        About us
                    </h3>
                    <p>
                        Global Palate Restaurant is famous for traditional cuisine of European and Asian countries. We are delighted to welcome you and exceed all your expectations.
                    </p>
                    <p>
                        We are waiting for you every day, from 9:00 to 21:00.


                    </p>
                </div>
            </div>
            <div className="choose-us">
                <h1 className="choose-us-title">Why choose us?</h1>
                <p className="choose-us-note"> <em>Over the million of peoples are happy with us</em></p>
                <div className="row choose-us-box">
                    < div className="col-sm-2 choose-us-box-item">
                        <div class="choose-us-box-item-icon-wrapper">
                            <img className="choose-us-box-item-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716631502/fresh_6905294_e0aytn.png" />
                        </div>
                        <h4 className="choose-us-box-item-title">Fresh food</h4>
                        <p className="choose-us-box-item-content">We serve the best and freshest quality food</p>
                    </div>
                    < div className="col-sm-2 choose-us-box-item">
                        <div class="choose-us-box-item-icon-wrapper">
                            <img className="choose-us-box-item-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716631509/gift_1528812_xuric9.png" />
                        </div>
                        <h4 className="choose-us-box-item-title">Best offer</h4>
                        <p className="choose-us-box-item-content">We give the best offer for our valuable customers</p>
                    </div>
                    < div className="col-sm-2 choose-us-box-item">
                        <div class="choose-us-box-item-icon-wrapper">
                            <img className="choose-us-box-item-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716631516/express-delivery_1981844_qv4s2f.png" />
                        </div>
                        <h4 className="choose-us-box-item-title">Fast delivery</h4>
                        <p className="choose-us-box-item-content">We have a delivery van to offer fast delivery</p>
                    </div>
                </div>
            </div>
            <div className="home-product">
                <h1 className="home-product-title">You may like one of our dishes:</h1>
                <div className="list-product">
                    <div className="list-product-title">
                        <button onClick={handleEuropeFood} className="list-product-btn">Europe Food</button>
                        <button onClick={handleVietNamFood} className="list-product-btn">VietNam Food</button>
                        <button onClick={handlKoreaFood} className="list-product-btn">Korea Food</button>
                        <button onClick={handlJapanFood} className="list-product-btn">Japan Food</button>
                        <button onClick={handlChinaFood} className="list-product-btn">China Food</button>
                    </div>
                    {isShowEuropeFood && (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            autoplay={false}
                            loop={true}
                            navigation
                            slidesPerView={isMobile ? 1 : 4}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className="row list-product-box"
                        >
                            <SwiperSlide className="col-sm-3 list-product-item">

                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716637038/pizza-pizza-filled-with-tomatoes-salami-olives_gjph1i.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Cheese sausage pizza</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$7,99</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716637136/beef-burger-7323692_m9jpr2.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Standard hamburger</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$6</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716637066/top-view-thanksgiving-apple-pie-with-autumn-leaves-pine-cones_tttltj.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Baked apple pie</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$6</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716637095/bagel-sandwich_axlccb.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Cheeseburger bagel</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$8</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716641207/grilles-chicken-steak-with-teriyaki-sauce_wypgjy.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Duck breast with orange sauce</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$20</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716641247/delicious-goulash-ready-dinner_z8ufkq.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Hungary style beef soup (Goulash)</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$40</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716642427/sausages-grill-pan-wooden-table_dx3wtn.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Delicious fried sausage</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$16</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716642416/close-up-view-delicious-food-arrangement_lhqvkd.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Grilled snails with fatty butter</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$25</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    )}
                    {isShowVietNamFood && (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            autoplay={false}
                            loop={true}
                            navigation
                            slidesPerView={isMobile ? 1 : 4}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className="row list-product-box"
                        >
                            <SwiperSlide className="col-sm-3 list-product-item">

                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716646932/banh-mi-viet-nam_v26mlq.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Vietnamese bread</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2,5</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647200/thumb-12_gxgxek.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Vietnamese Beef Pho</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$4</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647187/b%C3%BAn-b%C3%B2-768x1024_ipbftw.png" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Hue beef noodle soup</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$3,5</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647171/Buoc-11-Thanh-pham-11-7068-1681636164_u7fi7r.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Kebab rice noodles</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647577/thumb_fil3uc.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title"> Vietnamese crab noodle soup</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2,5</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647590/7Honthinthnhphm1-1709800144-8583-1709800424_alcptb.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Vietnamese broken rice</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647599/an-bao-lau-nay-ban-co-biet-bun-dau-mam-tom-la-dac-san-o-dau-202206021309408488_rtwyiy.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Noodle with fermented shrimp paste</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647610/nem-ran-12_pvxyli.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Fried spring roll</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647631/3-cach-lam-banh-xeo-mien-tay-thom-ngon-gion-rum-202303031501527280_wwyaif.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Vietnamese crepe</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716647650/anh4-nem-nuong-ninh-hoa-noi-tieng_ujgaz7.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Nha Trang grilled meat roll</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716648194/pho-cuon-ha-noi-1-911x1024-00423100_iepdb4.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Pho Rolls</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    )}
                    {isShowKoreaFood && (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            autoplay={false}
                            loop={true}
                            navigation
                            slidesPerView={isMobile ? 1 : 4}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className="row list-product-box"
                        >
                            <SwiperSlide className="col-sm-3 list-product-item">

                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649086/banh-gao-cay-han-quoc-scaled_e28kod.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Tteokbokki</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$5</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649074/30182-bulgogi-han-quoc_dxvfxh.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Bulgogi Korea</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$8</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649113/mi-tuong-den-jajangmyeon-02-1707203294_qag8ux.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Noodles in black bean sauce</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$4</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649144/gia-tri-dinh-duong-cua-ga-ham-sam-01_yfink0.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Ginseng Chicken Soup</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$10</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649152/gimpapne%CC%80-1200x676_l13od0.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Gimbap</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649162/cach-lam-mien-tron-han-quoc-chuan-ngon-japchae_jwcoew.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Japchae </h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$4</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649656/sot_ga_cay_73f05c4fce1841f395dbca9a8e19e2b3_grande_vfzq27.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Yangnyeom chicken </h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$6</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649794/Screen-Shot-2022-05-05-at-15.30.12_pksdko.png" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Naengmyeon</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$4</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    )}
                    {isShowJapanFood && (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            autoplay={false}
                            loop={true}
                            navigation
                            slidesPerView={isMobile ? 1 : 4}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className="row list-product-box"
                        >
                            <SwiperSlide className="col-sm-3 list-product-item">

                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716649958/sushi-dish-asian-restaurant_bpburd.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Sushi</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$7,99</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716650137/2-800x450-21_onjce9.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Soba noodles</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$7,5</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716650147/20201110_Spicy-Pork-Tonkatsu-5_thg6zw.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Tonkatsu</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$6,99</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716650167/sasi-800x533_mogglz.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Sashimi</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$14</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716650179/mi2_ZSFT_ie0zye.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Udon noodles</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$6</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    )}
                    {isShowChinaFood && (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            autoplay={false}
                            loop={true}
                            navigation
                            slidesPerView={isMobile ? 1 : 4}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className="row list-product-box"
                        >
                            <SwiperSlide className="col-sm-3 list-product-item">

                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716651176/Beijing_DUck_sliced.jpeg_a5qzmy.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Peking duck</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$71</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716651187/cach-lam-dau-hu-tu-xuyen-202008211354567297_w96iwn.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Mapo tofu</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$5</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716651197/manthau1_uhnenr.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Mantou</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$2</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716651209/image-thit-kho-dong-pha-mon-an-huyen-thoai-cua-trung-quoc-165391728647854_rozuze.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Braised pork belly Dong Po Rou</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$15</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716651225/phat-nhay-tuong-bo-duong-1707073624_xbuqod.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Buddha jumps over the wall</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$44</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716651251/Thnhphm11-1672386685-6665-1672386702_lyzbuc.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Yangzhou Fried Rice</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$7,5</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="col-sm-3 list-product-item">
                                <div className="list-product-item-img">
                                    <img className="list-product-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716652131/delicious-meal-with-sambal-arrangement_mvzy81.jpg" />
                                </div>
                                <div className="list-product-item-data">
                                    <h6 className="list-product-item-title">Age Gyoza</h6>
                                    <div className="list-product-item-star">
                                        <div className="list-product-item-review">
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                            <img className="list-product-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                        </div>
                                        <h6 className="list-product-item-price">$4</h6>
                                    </div>
                                    <p className="list-product-item-note">Book now to receive summer deals!</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    )}
                </div>
            </div>
            <div className="home-ingredients">

                <h1 className="home-ingredients-title">The best ingredients</h1>
                <div className="home-ingredients-data-content">
                    <p className="home-ingredients-content">We take an enormous amount of pride in sourcing our ingredients carefully to ensure that the flavors of our food are as delicious and authentic as possible. We're only able to achieve this level of excellence by putting an extra level of care into our menu items that is difficult to find at other restaurants.</p>
                </div>
                <div className="row ingredients-image">
                    <div className="col-sm-7 ingredients-item">
                        <img className="ingredients-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716681473/Remove-bg.ai_1716681262137_eos976.png" />
                    </div>
                </div>
            </div>
            <div className="discover">
                <h1 className="discover-title">Discover</h1>
                <p className="discover-content">Discover new facets of taste together with our talented chefs who are ready to delight you with new delicious dishes and drinks every day.</p>
            </div>
            <div className="client-review">
                <h1 className="client-review-title"> What peoples say about us</h1>
                <p className="client-review-content">Come and join us as we endeavor to recreate the magic of such emotions through our cuisine that is so quintessentially Global Palate</p>
                <div className="row client-review-data">
                    <div className="col-sm-3 client-review-data-box">
                        <div className="client-review-data-item">
                            <h4 className="client-review-data-item-title">Ivan Petrov </h4>
                            <div className="client-review-item-review">
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                            </div>
                        </div>
                        <p>I liked it all very much. I will come here again with my family.</p>
                        <div className="client-review-data-item-end">
                            <p className="rcm"> Recommend!</p>
                            <img className="client-review-data-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716688462/Remove-bg.ai_1716688030205_xthhto.png" />
                        </div>
                    </div>
                    <div className="col-sm-3 client-review-data-box">
                        <div className="client-review-data-item">
                            <h4 className="client-review-data-item-title">Ivan Petrov </h4>
                            <div className="client-review-item-review">
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                            </div>
                        </div>
                        <p>I liked it all very much. I will come here again with my family.</p>
                        <div className="client-review-data-item-end">
                            <p className="rcm"> Recommend!</p>
                            <img className="client-review-data-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716688463/Remove-bg.ai_1716688079166_labtfd.png" />
                        </div>
                    </div>
                    <div className="col-sm-3 client-review-data-box">
                        <div className="client-review-data-item">
                            <h4 className="client-review-data-item-title">Ivan Petrov </h4>
                            <div className="client-review-item-review">
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                                <img className="client-review-item-review-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716638512/star_l6gizo.png" />
                            </div>
                        </div>
                        <p>I liked it all very much. I will come here again with my family.</p>
                        <div className="client-review-data-item-end">
                            <p className="rcm"> Recommend!</p>
                            <img className="client-review-data-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716688463/Remove-bg.ai_1716688403247_t4l8pd.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="store">
                <div className="row store-box">
                    <div className="col-sm-4 store-item">
                        <h1 className="store-item-title">Global Palate Store</h1>
                        <p className="store-item-content">Take a closer look at our establishment with a gallery of photographs that capture the spirit of Global Palate.</p>
                        <p className="store-item-content">The refined atmosphere and delicious food will impress even the most sophisticated visitor.</p>
                        <button className="store-item-btn"> Our menu</button>
                    </div>
                    <div className="col-sm-4 store-item"></div>
                </div>
            </div>

        </div >
    );
};

export default Home;
