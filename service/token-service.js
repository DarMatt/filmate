const jwt = require('jsonwebtoken');
const tokenModel = require('../models/Token');
const config = require('config');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, config.get('jwtSecret'), {expiresIn: '24h'});
    const refreshToken = jwt.sign(payload, config.get('jwtRefreshSecret'), {expiresIn: '30d'});
  
    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({user: userId})
    if(tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save()
    }
    const token = await tokenModel.create({user: userId, refreshToken});
    return token;
  }
}

module.exports = new TokenService();