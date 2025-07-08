import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SectionTitle = () => {
  return (
    <div className='section01title'>
        <h2>아뜨랑스는</h2>
        <p>화면너머의 여러분에게 따뜻한 쇼핑메이트이고 싶습니다. <br />

            일상에 스며드는 실용적인 옷들부터<br />

            가장 빛이 나야하는 순간까지 언제나 함께 하겠습니다.
        </p>

       <div id="sectionTitleSwiper">
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            navigation={{
                prevEl:".swiperprev",
                nextEl:".swipernext"
            }}
            pagination={{
                el:'.pagination_fraction',
                type:'fraction',
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Link to="">
                        <img src={process.env.PUBLIC_URL + "/img/section01/sec01-1.jpg"} alt="sectionImg01" />
                        <span className='sectionTitTxt'>실시간으로 사랑받는 'BEST' </span>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="">
                        <img src={process.env.PUBLIC_URL + "/img/section01/sec01-2.jpg"} alt="sectionImg01" />
                        <span className='sectionTitTxt'>변하지 않는 가치 'MADE' </span>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="">
                        <img src={process.env.PUBLIC_URL + "/img/section01/sec01-3.jpg"} alt="sectionImg01" />
                        <span className='sectionTitTxt'>지금 이 순간 'NEW' </span>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                   <Link to="">
                        <img src={process.env.PUBLIC_URL + "/img/section01/sec01-4.jpg"} alt="sectionImg01" />
                        <span className='sectionTitTxt'>아뜨랑스만의 '휴양지룩'</span>
                   </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="">
                        <img src={process.env.PUBLIC_URL + "/img/section01/sec01-5.jpg"} alt="sectionImg01" />
                        <span className='sectionTitTxt'>매일 입고 싶은 '데이진' </span>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                   <Link  to="">
                        <img src={process.env.PUBLIC_URL + "/img/section01/sec01-6.jpg"} alt="sectionImg01" />
                        <span className='sectionTitTxt'>모바일에서 마음 전하는 '선물하기'</span>
                   </Link>
                </SwiperSlide>
    
            </Swiper>
            <div className="pagination">
                <div className="swipernext"></div>
                <div className="swiperprev"></div>
            </div>
            <div className="pagination_fraction"></div>
       </div>
    </div>
  );
};

export default SectionTitle;
