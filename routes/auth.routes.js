const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();
const auth = require('../middleware/auth.middleware');

router.post(
  '/register',
  [
    check('email', 'invalid email').isEmail(),
    check('password', 'the minimum password length is 6 characters').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      console.log('Body:', req.body);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'invalid data from registration',
        });
      }

      const { email, password, firstName, lastName, phoneNumber, hasPhone, files } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({
          message: 'This user is already registered. Please go to Sign In',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 6);
      const user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
        hasPhone,
        files,
      });

      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, please try again' });
    }
  }
);

router.get('/:id', auth, async (req, res) => {
  try {
    const userInfo = await User.findById(req.params.id);
    res.json(userInfo);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
});

router.post(
  '/login',
  [
    check('email', 'please enter correct email').normalizeEmail().isEmail(),
    check('password', 'enter the password').exists(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'invalid data from entering sistem',
        });
      }
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'User is not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password, please try again' });
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '24h',
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, please try again' });
    }
  }
);

module.exports = router;
