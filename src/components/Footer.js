import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerTop">
                <div className="delivery">
                    <div className="tit">DELIVERY</div>
                    <p>
                        교환/반품주소지 : <br />
                        서울시 구로구 구로동 237-14 지하1층 아뜨랑스담당
                    </p>
                    <div className="tit">CUSTOMER CENTER</div>
                    <p className="b">전화보다 빠른 상담 _</p>
                    <div className="kakao">
                        <span className="k"></span>
                        <span>카카오톡 문의하기</span>
                    </div>
                    <div className="naver">
                        <span className="n"></span>
                        <span>네이버 문의하기</span>
                    </div>
                    <p className="b">상담 가능 시간 _</p>
                    <p>
                        월~금 : am 11 ~ pm 5     점심시간 : pm 12 ~ 1 <br />
                        (토/일/공휴일은 휴무)
                    </p>

                </div>
                <div className="notice">
                    <div className="tit">NOTICE+</div>
                    <p>
                        - 아뜨랑스 고객센터 번호 도용 관련 주의 안내
                        <br />
                        - 5월 연휴 배송 공지
                        <br />
                        - 2025 설 배송 안내
                    </p>
                    <div className="tit">ABOUT ATTRANGS</div>
                    <p>
                        에스엔패션그룹 주식회사
                        <br />
                        대표 : 구길리 | 전화 : 1644-3225 | 팩스 : 02)2231-4995
                        <br />
                        주소 : 서울특별시 구로구 구로동 237-14 아뜨랑스
                        <br />
                        통신판매업 신고 : 2015-서울구로-1525
                        <br />
                        사업자등록번호 : 215-87-38531 [사업자정보확인]
                        <br />
                        개인정보보호책임자 : 정기열,윤시영 (attrangs@naver.com)
                        <br />
                        제휴,협찬,유통 문의 : attrangs@naver.com 
                        <br />
                    </p>
                    <p className="pmargin">Copyright &#40;c&#41; ATTRANGS. All Rights Reserved.</p>
                </div>
                <div className="onlyAttrangs">
                    <div className="tit">ONLY ATTRANGS</div>
                    <p>
                        ◎ 다양한 배송시스템 - 오늘출발,오늘도착,새벽도착
                        <br />
                        ◎ 스마트한 사이트 - 스마트서치
                        <br />
                        ◎ 2천평규모의 물류서비스 - 스팀케어부터 클린커버까지
                    </p>
                    <img src={process.env.PUBLIC_URL + "img/ft_offline_bnr2.jpg"} alt="" />
                    <div className="tit">SOCIALS</div>
                    <p>
                        <ul>
                            <li className="i"><Link to=""></Link></li>
                            <li className="f"><Link to=""></Link></li>
                            <li className="y"><Link to=""></Link></li>
                            <li className="k"><Link to=""></Link></li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="footerBot">
                <div className="footerNav">
                    <div className="footernav">
                        <ul>
                            <li><a href="#">이용안내</a></li>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">개인정보처리방침</a></li>
                            <li><a href="#">파트너쉽</a></li>
                            <li><a href="#">멤버쉽</a></li>
                            <li><a href="#">리크루트</a></li>
                            <li><a href="#">모바일버전</a></li>
                        </ul>
                    </div>
                    <div className="footerImages">
                        <ul>
                            <li><Link to="">SN Fashion Group.Co.Ltd Info</Link></li>
                            <li><Link to=""><img src={process.env.PUBLIC_URL + "/img/ft_mark0.gif"} alt="소니뮤즈 정품인증" /></Link></li>
                            <li><Link to=""><img src={process.env.PUBLIC_URL + "/img/ft_mark2.gif"} alt="KG이니시스" /></Link></li>
                            <li><Link to=""><img src={process.env.PUBLIC_URL + "/img/ft_mark3.gif"} alt="CJ대한통운" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;