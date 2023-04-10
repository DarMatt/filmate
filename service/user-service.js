const bcrypt = require('bcryptjs');
const User = require('../models/User');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const { generateOTP } = require('../utils/mail');

class UserService {
  async registration(props) {
    const {email, password, firstName, lastName, phoneNumber, hasPhone, files} = props;

    const candidate = await User.findOne({ email });

    if (candidate) {
      // throw new Error(`${email} user is already registered. Please go to Sign In`)
      return res.status(400).json({
        message: 'This user is already registered. Please go to Sign In',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 6);

   // const activationLink = uuid.v4(); // v34fa-asfasf-sa-asf
    const activationCode = generateOTP(); // 9851

    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      hasPhone,
      files,
      activationCode
    });

    await mailService.sendActivationMail(email, activationCode);
    const userDto = new UserDto(user); // id, email

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    await user.save();
    return {
      ...tokens,
      user
    }
  }

  async activate(activationCode) {
    const user = await User.findOne({activationCode});
    if(!user) {
      throw new Error('Invalid activation code')
    }
    user.isActivated = true;
    await user.save();
  }

  async getCode(email) {
    const user = await User.findOne({ email });
    const activationCode = generateOTP();
    user.activationCode = activationCode;
    await user.save();
    await mailService.sendActivationMail(email, activationCode);
  }
}

module.exports = new UserService();