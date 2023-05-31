const express = require('express');
const request = require('supertest');
const Cart = require('../models/cartModel');
const jwt = require('jsonwebtoken');
const Products = require('../models/allProducts');

// Import the router
const router = require('../routes/cart');



describe('GET /', () => {
    it('should render the cart page', async () => {
      await request(router)
        .get('/')
        .expect(200) 
        .expect('Content-Type', /hbs/); 
    });
  });
  