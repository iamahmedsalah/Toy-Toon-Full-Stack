const express = require('express');
const { mockRequest, mockResponse } = require('mock-req-res');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');

// Import the router
const router = require('../routes/reset');

describe('POST /', () => {
    it('should reset the user password', async () => {
        const req = mockRequest({
            query: { token: '2cc2bfe066814e8551442f433383b517dae2328b' },
            body: { userPassword: 'new-password' }
        });
        const res = mockResponse();

        // Mock the user found by the reset token
        const mockUser = {
            resetToken: '2cc2bfe066814e8551442f433383b517dae2328b',
            resetExpiration: Date.now() + 3600000, // Set reset expiration in the future
            save: jest.fn()
        };
        jest.spyOn(Users, 'findOne').mockResolvedValue(mockUser);

        // Mock the bcrypt.hash function
        jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashed-password');

        await router.post('/', req, res);

        expect(mockUser.password).toBe('hashed-password');
        expect(mockUser.resetToken).toBeNull();
        expect(mockUser.resetExpiration).toBeNull();
        expect(mockUser.save).toHaveBeenCalledTimes(1);
        expect(res.render).toHaveBeenCalledWith('resetPass', { msg: 'Password reset successful' });
    });

    it('should handle invalid or expired reset token', async () => {
        const req = mockRequest({
            query: { token: '2cc2bfe066814e8551442f433383b517dae2328b' },
            body: { userPassword: 'new-password' }
        });
        const res = mockResponse();

        // Mock the user not found by the reset token
        jest.spyOn(Users, 'findOne').mockResolvedValue(null);

        await router.post('/', req, res);

        expect(res.render).toHaveBeenCalledWith('resetPass', { err: 'Invalid reset link or link expired' });
    });
});
