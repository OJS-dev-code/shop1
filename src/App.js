import React, { useEffect, useState, useRef } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import data from './data/data';
import Main from "./pages/Main";
import Best from './pages/Best';
import New from './pages/New';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Sign from './pages/Sign';
import Footer from './components/Footer'
import Side from './components/Side.js'
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


import './App.scss';


function App() {
	const scrollContainerRef = useRef(null);
  	const [shopping] =useState(data);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHeaderWhite, setIsHeaderWhite] = useState(false); // NEW 클릭여부 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // 100px 이상 스크롤되면 동작
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" ref={scrollContainerRef}>
		<div  className={`popup ${isScrolled ? 'hide' : ''}`}>
			<Swiper 
			modules={[Autoplay]}
			autoplay={true}
			className="mySwiper">
				<SwiperSlide>아뜨랑스에서 사이즈 고민 하지 마세요! 사이즈 무료교환</SwiperSlide>
				<SwiperSlide>오늘밤 10시30분까지 주문하면 오/늘/출/발</SwiperSlide>
				<SwiperSlide>급할 땐 오늘출발, 새벽배송</SwiperSlide>
				<SwiperSlide> 앱 다운 받고, 첫 로그인하면 3천원 쿠폰을 드려요!</SwiperSlide>
				<SwiperSlide> 아뜨랑스 카카오 채널 추가 시 3,000원 할인 쿠폰 지급♥</SwiperSlide>
     		</Swiper>
		</div>
		<header  className={`${isScrolled || isHeaderWhite ? 'sticky' : ''}`}>
			<div className="headerLeft">
				<h1><Link to="/" onClick={() => setIsHeaderWhite(false)}>ATTRANGS</Link></h1>
				<nav>
					<ul>
						<li><Link to="/best" onClick={() => setIsHeaderWhite(true)}>BEST</Link></li>
						<li><Link to="/new" className="g" onClick={() => setIsHeaderWhite(true)}>NEW </Link></li>
						<li><a href="#">지금여름🌿<span>N</span>  </a></li>
						<li><a href="#">장마룩☔<span>N</span>  </a></li>
						<li><a href="#">휴양지룩👗<span>N</span>  </a></li>
						<li><a href="#">MADE</a></li>
						<li><a href="#">오늘의할인</a></li>
						<li><a href="#">하객룩</a></li>
						<li><a href="#">아우터</a></li>
						<li><a href="#">원피스</a></li>
						<li><a href="#">니트</a></li>
						<li><a href="#">티셔츠</a></li>
						<li><a href="#">블라우스/셔츠</a></li>
					</ul>
				</nav>
			</div>
			<div className="headerRight">
				<div className="gnb">
					<ul>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><Link to="/login">로그인</Link>
							<ul>
								<li>
									<Link to="sign">회원가입</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<Routes>
			<Route path="/" element={<Main shopping={shopping} />} />
            <Route path="/best" element={<Best />} />
            <Route path="/new" element={<New />} />
            <Route path="/detail/:id" element={<Detail  shopping={shopping} />} />
			<Route path="/login" element={<Login />}></Route>
			<Route path="/sign" element={<Sign />}></Route>
		</Routes>
		<Footer/>
		<Side scrollRef={scrollContainerRef}/>
    </div>
  );
}

export default App;
