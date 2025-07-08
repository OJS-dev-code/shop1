import React from 'react'

const Side = ({scrollRef}) => {
    const scrollToTop = (e) => {
        e.preventDefault(); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = (e) => {
        e.preventDefault(); 
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    return (
        <div className="sidebar">
            <ul className="quick_wrap">
                <li>
                    <a href="#"><img src={process.env.PUBLIC_URL + "/img/icon/smartsearch.png"} alt="" /></a>
                </li>
                <li>
                    <a href="#"><img src={process.env.PUBLIC_URL + "/img/icon/shortping.png"} alt="" /></a>
                </li>
                <li>
                    <a href="#"><img src={process.env.PUBLIC_URL + "/img/icon/pickmenu_re.png"} alt="" /></a>
                </li>
                <li>
                    <a href="#"><img src={process.env.PUBLIC_URL + "/img/icon/channeltalk.png"} alt="" /></a>
                </li>
                <li>
                    <a href="#"><img src={process.env.PUBLIC_URL + "/img/icon/channeltalk_kakao.png"} alt=""></img></a>
                </li>
                <li>
                    <a href="#" className="up" onClick={scrollToTop}><img src={process.env.PUBLIC_URL + "/img/icon/quickup.png"} alt="" /></a>
                </li>
                <li>
                    <a href="#" className="down" onClick={scrollToBottom}><img src={process.env.PUBLIC_URL + "/img/icon/quickup.png"} alt=""/></a>
                </li>
            </ul>
        </div>
    );
}
export default Side;