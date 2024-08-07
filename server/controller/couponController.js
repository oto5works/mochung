const Post = require('../models/Post')
const Coupon = require('../models/Coupon')
const User = require('../models/User')
const voucher = require('voucher-code-generator');
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';




exports.detail = (req, res, next) => {
  // Coupon 모델을 사용하여 모든 쿠폰 데이터를 가져옵니다.
  Coupon.find({}, (err, coupons) => {
    if (err) {
      return res.status(500).json({ error: '쿠폰 데이터를 가져올 수 없습니다.' });
    }
    
    res.json(coupons);
  });
};


exports.create = async (req, res, next) => {
  console.log('쿠폰몇장?', req.body.count);

  try {
    const numberOfCoupons = req.body.count || 1; // Number of coupons requested

    const generatedCoupons = [];

    for (let i = 0; i < numberOfCoupons; i++) {
      let couponCode;
      let isDuplicate = true;

      // Generate coupon code until a unique one is found
      while (isDuplicate) {
        // Generate a random coupon code using the defined character set
        couponCode = '';
        for (let j = 0; j < 8; j++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          couponCode += characters[randomIndex];
        }

        // Check if the generated coupon code already exists in the database
        const existingCoupon = await Coupon.findOne({ code: couponCode });

        // If it doesn't exist, mark it as non-duplicate
        if (!existingCoupon) {
          isDuplicate = false;
        }
      }

      // Create a new coupon object and save it to the database
      const newCoupon = new Coupon({
        code: couponCode,
        used: false,
        dateCreate: Date.now(),
        // Add other fields and settings as needed
      });

      await newCoupon.save();

      // Add the generated coupon code to the array
      generatedCoupons.push(couponCode);
    }

    // Return the array of generated coupon codes in the response
    res.status(201).json({ generatedCoupons });
  } catch (error) {
    // Handle errors
    next(error);
  }
};






exports.delete = async (req, res, next) => {
  try {
    const couponId = req.params.id;

    // Find the coupon to be deleted
    const coupon = await Coupon.findById(couponId);

    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    await coupon.remove();

    res.status(204).end(); // Respond with a success status

  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
};

exports.edit = async (req, res, next) => {
  
};