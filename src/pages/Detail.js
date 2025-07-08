import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({shopping}) => {
    const {id} = useParams();
    const product = shopping.find(item => item.id === Number(id));

    const productCode = product.description.slice(0, 6); // 앞 6글자
    const productdec = product.description.slice(7, -1); // 앞 6글자

    const discountAmount = product.price - product.discount;

    const [likeCount, setLikeCount] = useState(0);
    const handleLike = () => {
        setLikeCount(likeCount + 1); // 1씩 증가
    };

    if(!product){
        return <div>해당 상품을 찾을 수 없습니다.</div>;
    }

    return (
        <div className='details'>
            <img src={product.img} alt={product.title} />
            <div className='left'>
                <p className='code'>상품번호: {productCode}</p>
                <h2>{product.title}</h2>
                <ul>
                    <li><a href="#">쿠폰할인</a></li>
                    <li><a href="#">부분오늘출발</a></li>
                    <li><a href="#">사이즈교환무료</a></li>
                </ul>
                <p className='dec'>{productdec}</p>
                <div className="priceWrap">
                    <div className="price">{product.price.toLocaleString()}</div> <span> / </span>
                    <div className="discount">{product.discount.toLocaleString()}</div>
                    <div className="sale">{product.sale.toLocaleString()}</div>
                </div>
                <div className="total">총 {discountAmount}원 할인</div>
                <div className="buttonWrap">
                    <div className="like" onClick={handleLike}>
                        <span className="heart"><img src={process.env.PUBLIC_URL + "/img/icon/like.png"} alt="좋아요" /></span>
                        <span>{likeCount}</span>
                    </div>
                    <div className="cart">장바구니</div>
                    <div className="buy">구매하기</div>
                </div>
            </div>
        </div>
    );
};

export default Detail;