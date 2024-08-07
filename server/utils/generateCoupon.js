const voucher = require('voucher-code-generator');
const Coupon = require('../models/Coupon'); // 쿠폰 모델 임포트

// 쿠폰 생성 미들웨어 함수
const generateCoupon = async (req, res, next) => {
  try {
    // 쿠폰 코드 생성
    const couponCode = voucher.generate({
      length: 8, // 쿠폰 코드 길이 설정
      count: 1,  // 생성할 쿠폰 코드 수 설정
    })[0]; // 생성된 쿠폰 코드 중 첫 번째 코드를 선택

    // 생성된 쿠폰 코드를 데이터베이스에 저장
    const newCoupon = new Coupon({
      code: couponCode,
      // 다른 필드 및 설정 추가
    });

    await newCoupon.save();

    // 생성된 쿠폰 코드를 요청 객체에 저장하여 다음 미들웨어나 라우트에서 사용할 수 있도록 함
    req.couponCode = couponCode;

    // 다음 미들웨어로 이동
    next();
  } catch (error) {
    // 오류 처리
    next(error);
  }
};

module.exports = generateCoupon;
