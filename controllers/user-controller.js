const userService = require("../service/user-service");
const { validationResult } = require('express-validator');

class UserController {

  async register(req, res, next) {
    try {
      console.log('reqreq', req.body)
      const errors = validationResult(req);
console.log('errors', errors.isEmpty())
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'invalid data from registration',
        });
      }
      const userData = await userService.registration(req.body);
      // res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000})

      return res.status(201).json({ message: 'User created', ...userData });
      // return res.status(201).json(userData);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, please try again' });
    }
  }

  async logout(req, res, next) {
    try {

    } catch (e) {

    }
  }
  async refresh(req, res, next) {
    try {

    } catch (e) {
      
    }
  }
  async activate(req, res, next) {
    try {
      console.log('req', req.params)
      const activationCode = req.params.code;
      await userService.activate(activationCode);
      return res.status(201).json({ message: 'User is activated' });
    } catch (e) {
      res.status(500).json({ message: 'Activation code is not valid' });
    }
  }
  async getCode(req, res, next) {
    try {
      const email = req.params.email;
      await userService.getCode(email);
      return res.status(201).json({ message: 'New code has been sent to your email' });
    } catch (e) {
      res.status(500).json({ message: 'Failed to send new code' });
    }
  }
  async getUsers(req, res, next) {
    try {
     res.json(['123', '456'])
    } catch (e) {
      
    }
  }

}

module.exports = new UserController();