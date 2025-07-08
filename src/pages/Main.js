import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../components/SectionTitle";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Tabs.css';
import {Link} from "react-router-dom"
import {Navigation, Pagination, Autoplay } from 'swiper/modules';

const Main = ({shopping}) => {
	
	const tabList = ['#자체제작', '#바지맛집', '#지금여름🌿', /* '#하객룩' */];
	const [activeTab, setActiveTab] = useState(tabList[0]);

	const tabImages = {
		'#지금여름🌿': Array.from({ length: 12 }, (_, i) => `/img/summer/summer${String(i + 1).padStart(2, '0')}.gif`),
		'#바지맛집': Array.from({ length: 10 }, (_, i) => `/img/pants/pants${String(i + 1).padStart(2, '0')}.gif`),
		'#자체제작': Array.from({ length: 10 }, (_, i) => `/img/self/self${String(i + 1)}.gif`),
		//'#하객룩': Array.from({ length: 5 }, (_, i) => `/img/guest/guest${String(i + 1).padStart(2, '0')}.gif`),
	};

    return (
        <main>
			<section className="mainSlide">
				<h2 className="ir_so">메인 슬라이드</h2>
				<Swiper navigation={true} modules={[Navigation]} className="mainSwiper">
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img01.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img02.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img03.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img04.jpg" } alt="" /></SwiperSlide>
				</Swiper>
			</section>
			<SectionTitle></SectionTitle>
			<section className="summer">
				<h2>지금여름🌿</h2>
				<h3>설레는 여름</h3>

				<div className="summerLists">
					<ul> 
						{/* 중괄호 안은 자바스크립트 구간
							item == 데이터 아이템들
						 */}
						{
							shopping.map((item, index) => (
								<li key={index}>
									<Link to={`/detail/${item.id}`}>
										<img src={process.env.PUBLIC_URL + item.img} alt="그림이미지"/>
										<div className="textbox">
											<div className="priceWrap">
												<span className='sale'>{item.sale}</span>
												<span className='price'>{item.price}</span>
												<span className='discount'>{item.discount}</span>
											</div>
											<div className="title">{item.title}</div>
											<div className="descript">{item.description}</div>
											<div className="company">{item.company}</div>
										</div>
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			</section>
			<section className="season">
				<h2>지금이 딱이야</h2>
				<h3>#우리들의 계절</h3>
				<div className="tabs-container">
					<div className="tab-buttons">
						{tabList.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`tab-button ${activeTab === tab ? 'active' : ''}`}
						>
							{tab}
						</button>
						))}
					</div>
					<div className="tab-content">
						<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						spaceBetween={20}
						slidesPerView={3}
						navigation
						pagination={{ clickable: true }}
						autoplay={{ delay: 3000 }}
						breakpoints={{
							640: { slidesPerView: 2 },
							768: { slidesPerView: 3 },
							1024: { slidesPerView: 4 },
						}}
						>
						{tabImages[activeTab].map((img, index) => (
							<SwiperSlide key={index}>
							<img src={img} alt={`Slide ${index}`} className="slide-img" />
							</SwiperSlide>
						))}
						</Swiper>
					</div>
				</div>
			</section>
		</main>
    );
};

export default Main;