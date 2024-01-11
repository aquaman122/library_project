const express = require("express");
const router = express.Router();
// validator
const {body, validationResult} = require('express-validator');
const { addToCart, getCartItems, removeCartItems } = require('../controller/cartController');


router.use(express.json());


// 장바구니 담기 POST 201
router.post('/', addToCart)
// 장바구니 조회 200 // 장바구니 예상 상품 목록 조희
router.get('/', getCartItems);

// 장바구니 제거 200
router.delete('/:id', removeCartItems);

module.exports = router;